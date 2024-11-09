<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { doc, onSnapshot, Timestamp } from 'firebase/firestore';
import { chatroomsCol } from 'src/boot/firebase';
import OverlappingAvatars from 'src/components/OverlappingAvatars.vue';
import { useRoom } from 'src/composables/room';

const router = useRouter();
const props = defineProps<{
  id: string;
  maxLength?: number;
}>();

const { leaveRoom, chatUsers, fetchRoomData } = useRoom(props.id);
const loading = ref(true);
const roomData = ref<{
  name: string;
  users: string[];
  private: boolean;
  latestMessage?: {
    text: string;
    timestamp: Timestamp;
  };
}>();

let unsubscribe: (() => void) | null = null;

const subscribeToRoom = async (roomId: string) => {
  await fetchRoomData();

  unsubscribe = onSnapshot(
    doc(chatroomsCol, roomId),
    async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        roomData.value = {
          name: data.name,
          users: data.users || [],
          private: data.private ?? true,
          latestMessage:
            data.latestMessageText && data.latestMessageTimestamp
              ? {
                  text: data.latestMessageText,
                  timestamp: data.latestMessageTimestamp,
                }
              : undefined,
        };

        if (data.users?.length !== chatUsers.value?.length) {
          await fetchRoomData();
        }
      }
      loading.value = false;
    },
    (error) => {
      console.error('Error fetching room:', error);
      loading.value = false;
    }
  );
};

const formatTimestamp = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();

  return isToday
    ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : date.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
};

const truncateMessage = (
  text: string,
  maxLength = props.maxLength as number
) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const handleLeaveRoom = async (event: Event) => {
  event.stopPropagation();
  if (!props.id) return;

  try {
    await leaveRoom();
    if (router.currentRoute.value.params.id === props.id) {
      await router.push('/chats');
    }
  } catch (error) {
    console.error('Failed to leave room:', error);
  }
};

onMounted(async () => {
  await subscribeToRoom(props.id);
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
</script>

<template>
  <q-item clickable v-ripple @click="router.push(`/chat/${props.id}`)">
    <q-item-section>
      <div v-if="loading">
        <q-skeleton type="text" width="100px" />
        <q-skeleton type="text" width="50px" />
      </div>
      <div v-else>
        <div class="row items-center q-gutter-sm">
          <div class="text-weight-bold">{{ roomData?.name }}</div>
          <q-chip
            v-if="roomData && !roomData.private"
            dense
            size="sm"
            color="pink-5"
            text-color="white"
            label="Public"
          />
        </div>
        <div class="text-caption text-grey">
          <template v-if="roomData?.latestMessage">
            {{ truncateMessage(roomData.latestMessage.text) }} ·
            {{ formatTimestamp(roomData.latestMessage.timestamp) }}
          </template>
          <template v-else>No messages yet</template>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row items-center justify-end">
        <OverlappingAvatars :users="chatUsers" left />
        <q-btn
          icon="logout"
          flat
          round
          class="q-ml-md"
          @click="handleLeaveRoom"
          color="negative"
        />
      </div>
    </q-item-section>
  </q-item>
</template>
