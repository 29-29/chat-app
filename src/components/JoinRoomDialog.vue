<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { defineEmits } from 'vue';

const emits = defineEmits(['createRoom', 'joinRoom']);
const showDialog = ref(false);
const roomCode = ref('');
const roomCodes = ref<string[]>([]);

const fetchRoomCodes = async () => {
  const querySnapshot = await getDocs(collection(db, 'chatrooms'));
  roomCodes.value = querySnapshot.docs.map((doc) => doc.data().roomCode);
};

const handleJoinRoom = () => {
  if (!roomCodes.value.includes(roomCode.value)) {
    emits('createRoom', roomCode.value);
  } else {
    emits('joinRoom', roomCode.value);
  }
};

onMounted(() => {
  fetchRoomCodes();
  roomCode.value = '';
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
          :hint="
            !roomCodes.includes(roomCode) && roomCode
              ? 'Room does not exist'
              : ''
          "
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn
          flat
          :label="!roomCodes.includes(roomCode) ? 'CREATE ROOM' : 'JOIN'"
          v-close-popup
          @click="handleJoinRoom"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
