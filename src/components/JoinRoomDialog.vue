<script setup lang="ts">
import { ref, watch } from 'vue';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'src/boot/firebase';

const emits = defineEmits(['createRoom', 'joinRoom']);
const showDialog = ref(false);
const roomCode = ref('');
const roomExists = ref(false);
const isChecking = ref(false);

const checkRoomExists = async (code: string) => {
  if (!code) {
    roomExists.value = false;
    return;
  }

  isChecking.value = true;
  try {
    const roomQuery = query(
      collection(db, 'chatrooms'),
      where('code', '==', code)
    );
    const snapshot = await getDocs(roomQuery);
    roomExists.value = !snapshot.empty;
  } catch (error) {
    console.error('Failed to check room:', error);
    roomExists.value = false;
  } finally {
    isChecking.value = false;
  }
};

// Debounce the room check to avoid too many queries
let timeout: NodeJS.Timeout;

const handleJoinRoom = () => {
  if (!roomExists.value) {
    emits('createRoom', roomCode.value);
  } else {
    emits('joinRoom', roomCode.value);
  }
};

watch(roomCode, (newCode) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    checkRoomExists(newCode);
  }, 500);
});
</script>

<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section class="q-gutter-md">
        <div class="text-h6">Join Room</div>
        <q-input
          v-model="roomCode"
          label="Room Code"
          outlined
          stack-label
          :hint="!roomExists && roomCode ? 'Room does not exist' : ''"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn
          flat
          :label="!roomExists ? 'CREATE ROOM' : 'JOIN'"
          v-close-popup
          @click="handleJoinRoom"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
