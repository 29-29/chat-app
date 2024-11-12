<script setup lang="ts">
import { ref } from 'vue';

const newMessage = ref('');

const emit = defineEmits(['sendMessage']);

const sendMessage = () => {
  emit('sendMessage', newMessage.value);
};
</script>

<template>
  <q-form class="q-ma-md" @submit.prevent>
    <q-input
      v-model="newMessage"
      placeholder="Type a message"
      color="pink-5"
      dense
      outlined
    >
      <template v-slot:after>
        <q-btn
          round
          dense
          flat
          icon="send"
          color="pink-5"
          type="submit"
          @click="sendMessage"
        />
      </template>
    </q-input>
  </q-form>
</template>
