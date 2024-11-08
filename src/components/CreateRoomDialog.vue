<script setup lang="ts">
import { ref } from 'vue';

const roomCode = ref('');
const roomName = ref('');
const isPrivate = ref(false);

const showDialog = ref(false);

const emits = defineEmits(['update:roomCode', 'createRoom']);
</script>

<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section class="q-gutter-md">
        <div class="text-h6">Create Room</div>
        <q-input
          v-model="roomCode"
          @update:model-value="$emit('update:roomCode', $event)"
          label="Room Code"
          stack-label
        />
        <q-input v-model="roomName" label="Room Name" stack-label />
        <q-toggle v-model="isPrivate" label="Private Room" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn
          flat
          label="Create"
          v-close-popup
          @click="emits('createRoom', roomCode, roomName, isPrivate)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
