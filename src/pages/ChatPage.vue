<script setup lang="ts">
import {
  DocumentData,
  getDocs,
  query,
  where,
  documentId,
} from 'firebase/firestore';
import { messagesCol, usersCol } from 'src/boot/firebase';
import ChatMessage from 'src/components/ChatMessage.vue';
import { User } from 'src/components/models';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRoom } from 'src/composables/room';

interface ChatMessage {
  id: string;
  data: DocumentData;
}

const route = useRoute();
const roomID = <string>route.params?.id;
const { room, fetchRoomData } = useRoom();

// Users state
const chatUsers = ref<Array<User>>([]);

const fetchUsers = async () => {
  if (room.users.length > 0) {
    const q = query(usersCol, where(documentId(), 'in', room.users));
    const querySnapshot = await getDocs(q);
    chatUsers.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      displayName: doc.data().displayName,
      photoURL: doc.data().photoURL,
      rooms: doc.data().rooms,
    }));
  }
};

// Messages state
const messagesRaw = ref<Array<ChatMessage>>([]);
const messages = computed(() =>
  messagesRaw.value.map((msg) => {
    const data = msg.data;
    return {
      id: msg.id,
      data: {
        message: data.message,
        author: chatUsers.value.find((user) => user.id === data.author),
        timestamp: data.timestamp,
      },
    };
  })
);

const fetchMessages = async () => {
  try {
    const querySnapshot = await getDocs(messagesCol(roomID));
    messagesRaw.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  } catch (error) {
    console.error('Failed to fetch messages', error);
  }
};

onMounted(async () => {
  await fetchRoomData(roomID);
  await Promise.all([fetchMessages(), fetchUsers()]);
});
</script>

<template>
  <div class="q-pa-md">
    <div v-if="room.loading" class="q-pa-md">
      <q-skeleton type="text" class="q-mb-sm" />
      <q-skeleton type="text" class="q-mb-sm" />
      <q-skeleton type="text" />
    </div>
    <div v-else>
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :data="message.data"
      />
    </div>
  </div>
</template>
