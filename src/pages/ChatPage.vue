<script setup lang="ts">
import {
  getDocs,
  query,
  where,
  documentId,
  addDoc,
  serverTimestamp,
  Timestamp,
  orderBy,
} from 'firebase/firestore';
import { messagesCol, usersCol } from 'src/boot/firebase';
import ChatMessage, { MessageData } from 'src/components/ChatMessage.vue';
import { User } from 'src/components/models';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRoom } from 'src/composables/room';
import { useCurrentUser } from 'src/composables/currentUser';
import ChatMessageList from 'src/components/ChatMessageList.vue';
import ChatInput from 'src/components/ChatInput.vue';

interface ChatMessage {
  id: string;
  data: {
    message: string;
    author: string;
    timestamp: Timestamp;
  };
}

const route = useRoute();
const roomID = <string>route.params?.id;
const { room, fetchRoomData, updateLatestMessage } = useRoom(roomID);
const { currentUser } = useCurrentUser();

// Users state
const chatUsers = ref<Array<User>>([]);
const messagesRaw = ref<Array<ChatMessage>>([]);
const loading = ref(true);

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
const messages = computed(() =>
  messagesRaw.value
    .map((msg) => {
      const data = msg.data;
      const author = chatUsers.value.find((user) => user.id === data.author);

      // Skip messages with missing author
      if (!author) return null;

      return {
        id: msg.id,
        data: {
          message: data.message,
          author: author as User,
          timestamp: data.timestamp,
        } as MessageData,
      };
    })
    .filter(
      (
        msg
      ): msg is {
        id: string;
        data: {
          message: string;
          author: User;
          timestamp: Timestamp;
        };
      } => msg !== null
    )
);

const fetchMessages = async () => {
  try {
    const q = query(messagesCol(roomID), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    messagesRaw.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data() as {
        message: string;
        author: string;
        timestamp: Timestamp;
      },
    }));
  } catch (error) {
    console.error('Failed to fetch messages', error);
  } finally {
    loading.value = false;
  }
};

const sendMessage = async (newMessage: string) => {
  if (!newMessage.trim()) return;

  try {
    const timestamp = serverTimestamp() as Timestamp;

    // Send the message
    await addDoc(messagesCol(roomID), {
      message: newMessage,
      author: currentUser.value?.uid,
      timestamp,
    });

    // Update room's latest message
    await updateLatestMessage(roomID, {
      text: newMessage,
      timestamp,
    });

    await fetchMessages();
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};

onMounted(async () => {
  await fetchRoomData();
  await Promise.all([fetchMessages(), fetchUsers()]);
});
</script>

<template>
  <div v-if="room.loading || loading">
    <q-skeleton type="text" class="q-mb-sm" />
    <q-skeleton type="text" class="q-mb-sm" />
    <q-skeleton type="text" />
  </div>
  <div v-else class="chat-container q-pa-md">
    <ChatInput @sendMessage="sendMessage" style="width: inherit" />
    <ChatMessageList class="full-height" :messages="messages" />
  </div>
</template>

<style lang="sass" scoped>
.input-container
  transition: all 0.25s ease-in-out
  background-color: white
  border: 1px solid $pink-2
  border-radius: 50px
  opacity: 20%
  &:focus-within
    border: 1px solid $pink-8
    opacity: 100%
  &:hover:not(:focus-within)
    border-color: $pink-4
    opacity: 60%

.chat-container
  height: calc(100vh - 50px)
  display: flex
  flex-direction: column
  gap: $flex-gutter-md
</style>
