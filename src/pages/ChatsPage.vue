<script setup lang="ts">
import {
  addDoc,
  arrayUnion,
  collection,
  updateDoc,
  query,
  getDocs,
  where,
  serverTimestamp,
  doc,
} from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import ChatList from 'src/components/ChatList.vue';
import JoinRoomDialog from 'src/components/JoinRoomDialog.vue';
import CreateRoomDialog from 'src/components/CreateRoomDialog.vue';
import { ref, nextTick } from 'vue';
import { useCurrentUser } from 'src/composables/currentUser';
import { useRouter } from 'vue-router';

const { currentUser } = useCurrentUser();
const joinRoomDialog = ref(false);
const createRoomDialog = ref(false);
const roomCode = ref('');
const router = useRouter();

const handleJoinRoom = async (code: string) => {
  try {
    const roomQuery = query(
      collection(db, 'chatrooms'),
      where('code', '==', code)
    );
    const snapshot = await getDocs(roomQuery);

    if (!snapshot.empty) {
      const roomId = snapshot.docs[0].id;
      await router.push(`/chat/${roomId}`);
    }
  } catch (error) {
    console.error('Failed to join room:', error);
  }
};

const handleCreateRoomClick = (code: string) => {
  roomCode.value = code;
  joinRoomDialog.value = false;
  nextTick(() => {
    createRoomDialog.value = true;
  });
};

const handleCreateRoom = async (
  code: string,
  roomName: string,
  isPrivate: boolean
) => {
  if (!currentUser.value) return;

  try {
    // Create room with initial data
    const roomRef = await addDoc(collection(db, 'chatrooms'), {
      code,
      name: roomName,
      private: isPrivate,
      users: [currentUser.value.uid],
      createdAt: serverTimestamp(),
      lastMessageTime: serverTimestamp(),
    });

    // Update user's rooms array
    await updateDoc(doc(db, 'users', currentUser.value.uid), {
      rooms: arrayUnion(roomRef.id),
    });

    createRoomDialog.value = false;

    // Navigate to the newly created room
    await router.push(`/chat/${roomRef.id}`);
  } catch (error) {
    console.error('Failed to create room:', error);
  }
};
</script>

<template>
  <div class="q-pa-md q-gutter-md">
    <div class="flex justify-between items-center">
      <div class="text-h4 text-weight-bold">Chats</div>
      <q-btn
        icon="add"
        color="pink-5"
        size="sm"
        round
        @click="joinRoomDialog = true"
      />
    </div>
    <Suspense>
      <ChatList />
    </Suspense>
  </div>

  <JoinRoomDialog
    v-model="joinRoomDialog"
    @joinRoom="handleJoinRoom"
    @createRoom="handleCreateRoomClick"
  />

  <CreateRoomDialog
    v-model="createRoomDialog"
    :room-code="roomCode"
    @createRoom="handleCreateRoom"
  />
</template>
