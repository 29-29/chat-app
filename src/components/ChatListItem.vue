<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoom } from 'src/composables/room';
import OverlappingAvatars from 'src/components/OverlappingAvatars.vue';

const router = useRouter();
const props = defineProps({
  id: String,
});

const { room, fetchRoomData, leaveRoom } = useRoom();

const handleLeaveRoom = async (event: Event) => {
  event.stopPropagation();
  if (!props.id) return;

  try {
    await leaveRoom(props.id);
    // Optionally navigate back to /chats if we're in the room being left
    if (router.currentRoute.value.params.id === props.id) {
      await router.push('/chats');
    }
  } catch (error) {
    console.error('Failed to leave room:', error);
  }
};

onMounted(async () => {
  await fetchRoomData(props.id as string);
});
</script>

<template>
  <q-item clickable v-ripple @click="router.push(`/chat/${props.id}`)">
    <q-item-section>
      <div v-if="room.loading">
        <q-skeleton type="text" width="100px" />
        <q-skeleton type="text" width="50px" />
      </div>
      <div v-else>
        <div class="text-weight-bold">{{ room.name }}</div>
        <div class="text-caption text-grey">
          {{ room.latestMessage?.text || 'No messages yet' }}
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row items-center q-gutter-sm">
        <template v-if="room.users.length > 0">
          <OverlappingAvatars :users="room.users" right />
        </template>
        <q-btn
          icon="logout"
          flat
          round
          @click="handleLeaveRoom"
          color="negative"
        />
      </div>
    </q-item-section>
  </q-item>
</template>
