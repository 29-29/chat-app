<script setup lang="ts">
import { DocumentData, getDocs } from 'firebase/firestore';
import { messagesCol } from 'src/boot/firebase';
import ChatMessage from 'src/components/ChatMessage.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

interface Message {
  id: string;
  data: DocumentData;
}

const route = useRoute();
const roomID = <string>route.params?.id;
const messages = ref<Array<Message>>([]);

const fetchMessages = async () => {
  await getDocs(messagesCol(roomID))
    .then((result) => {
      result.forEach((message) => {
        messages.value.push({ id: message.id, data: message.data() });
      });
    })
    .catch((error) => {
      console.error('Failed to fetch messages', error);
    });
};

onMounted(async () => {
  await fetchMessages();
});
</script>

<template>
  <ChatMessage
    v-for="message in messages"
    :key="message.id"
    :avatar="message.data.photoURL"
  />
</template>
