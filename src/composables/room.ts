import {
  doc,
  getDoc,
  query,
  where,
  documentId,
  getDocs,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';
import { chatroomsCol, usersCol } from 'src/boot/firebase';
import { reactive, ref } from 'vue';
import { User } from 'src/components/models';

export function useRoom() {
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

  const fetchRoomData = async (roomID: string) => {
    await getDoc(doc(chatroomsCol, roomID))
      .then(async (doc) => {
        const data = doc.data();
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
      })
      .catch((error) => {
        console.error('failed to fetch room data', error);
        room.loading = false;
      });
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

  return {
    room,
    chatUsers,
    fetchRoomData,
    updateLatestMessage,
  };
}
