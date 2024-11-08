import {
  doc,
  getDoc,
  query,
  where,
  documentId,
  getDocs,
} from 'firebase/firestore';
import { chatroomsCol, usersCol } from 'src/boot/firebase';
import { reactive, ref } from 'vue';
import { User } from 'src/components/models';

export function useRoom() {
  const room = reactive({
    loading: true,
    name: '',
    users: [],
  });

  const chatUsers = ref<Array<User>>([]);

  const fetchRoomData = async (roomID: string) => {
    await getDoc(doc(chatroomsCol, roomID))
      .then(async (doc) => {
        const data = doc.data();
        room.name = data?.name;
        room.users = data?.users;

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

  return {
    room,
    chatUsers,
    fetchRoomData,
  };
}
