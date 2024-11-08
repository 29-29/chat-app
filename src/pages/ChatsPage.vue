<script setup lang="ts">
import { addDoc, arrayUnion, collection, updateDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import ChatList from 'src/components/ChatList.vue';
import JoinRoomDialog from 'src/components/JoinRoomDialog.vue';
import CreateRoomDialog from 'src/components/CreateRoomDialog.vue';
import { ref, nextTick } from 'vue';
import { useCurrentUser } from 'src/composables/currentUser';

const { currentUser } = useCurrentUser();
const joinRoomDialog = ref(false);
const createRoomDialog = ref(false);
const roomCode = ref('');

const handleJoinRoom = (code: string) => {
  console.log('join room', code);
};

const handleCreateRoomClick = (code: string) => {
  roomCode.value = code;
  joinRoomDialog.value = false;
  // Use nextTick to ensure dialogs don't conflict
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
    // Create room and join it
    const roomRef = await addDoc(collection(db, 'chatrooms'), {
      code: code,
      name: roomName,
      private: isPrivate,
      users: [currentUser.value.uid],
    });

    // Join the room after creating it
    await updateDoc(roomRef, {
      users: arrayUnion(currentUser.value.uid),
    });

    createRoomDialog.value = false;
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
