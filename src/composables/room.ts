import {
  doc,
  getDoc,
  query,
  where,
  documentId,
  getDocs,
  updateDoc,
  Timestamp,
  arrayUnion,
  DocumentData,
} from 'firebase/firestore';
import { chatroomsCol, usersCol } from 'src/boot/firebase';
import { reactive, ref } from 'vue';
import { User } from 'src/components/models';
import { useCurrentUser } from './currentUser';

export function useRoom(roomID: string) {
  const room = reactive({
    loading: true,
    name: '',
    users: [],
    latestMessage: {
      text: '',
      timestamp: Timestamp.now(),
    },
  });

  const chatUsers = ref<Array<User>>([]);
  const { currentUser } = useCurrentUser();

  //LOCAL VARIABLES
  //  ROOM DOCS
  const roomRef = doc(chatroomsCol, roomID);
  const roomDoc = getDoc(roomRef);

  //  USER DOCS
  const userRef = doc(usersCol, currentUser.value?.uid);
  const userDoc = getDoc(userRef);

  const leaveRoom = async () => {
    if (!currentUser.value) return;

    const roomSnapshot = await roomDoc;
    const userSnapshot = await userDoc;

    if (roomSnapshot.exists() && userSnapshot.exists())
      try {
        // Remove user from room's users array
        const users = roomSnapshot.data().users || [];
        await updateDoc(roomRef, {
          users: users.filter((uid: string) => uid !== currentUser.value?.uid),
        });

        // Remove room from user's rooms array
        const rooms = userSnapshot.data().rooms || [];
        await updateDoc(userRef, {
          rooms: rooms.filter((id: string) => id !== roomID),
        });
      } catch (error) {
        console.error('Failed to leave room:', error);
      }
  };

  const fetchRoomData = async () => {
    const roomSnapshot = await roomDoc;

    if (roomSnapshot.exists()) {
      const data = roomSnapshot.data();
      room.name = data?.name;
      room.users = data?.users;
      room.latestMessage.text = data?.latestMessageText;
      room.latestMessage.timestamp = data?.latestMessageTimestamp;

      // Fetch users after we have the room data
      if (room.users.length > 0) {
        const q = query(usersCol, where(documentId(), 'in', room.users));
        const querySnapshot = await getDocs(q);
        chatUsers.value = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            displayName: data.displayName,
            photoURL: data.photoURL,
            rooms: data.rooms,
          };
        });
      }

      room.loading = false;
    } else {
      console.error("Document doesn't exist!");
      room.loading = false;
    }
  };

  const updateLatestMessage = async (
    roomID: string,
    message: {
      text: string;
      timestamp: Timestamp;
    }
  ) => {
    try {
      await updateDoc(doc(chatroomsCol, roomID), {
        latestMessageText: message.text,
        latestMessageTimestamp: message.timestamp,
      });
    } catch (error) {
      console.error('Failed to update latest message:', error);
    }
  };

  const joinRoom = async () => {
    const { currentUser } = useCurrentUser();
    if (!currentUser.value) return;

    const roomSnapshot = await roomDoc;
    const userSnapshot = await userDoc;

    try {
      if (!roomSnapshot.exists()) return;

      const roomData = roomSnapshot.data() as DocumentData;
      const userData = userSnapshot.data() as DocumentData;
      if (
        !roomData.users.includes(currentUser.value.uid) ||
        !userData.rooms.includes(roomID)
      ) {
        // Add user to room's users array
        await updateDoc(roomRef, {
          users: arrayUnion(currentUser.value.uid),
        });

        // Add room to user's rooms array
        await updateDoc(userRef, {
          rooms: arrayUnion(roomID),
        });

        // Refresh room data
        await fetchRoomData();
      }
    } catch (error) {
      console.error('Failed to join room:', error);
    }
  };

  return {
    room,
    chatUsers,
    fetchRoomData,
    updateLatestMessage,
    joinRoom,
    leaveRoom,
  };
}
