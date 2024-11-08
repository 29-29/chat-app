<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoom } from 'src/composables/room';
import OverlappingAvatars from 'src/components/OverlappingAvatars.vue';

const router = useRouter();
const props = defineProps({
  id: String,
});

const { room, fetchRoomData } = useRoom();

onMounted(async () => {
  await fetchRoomData(props.id as string);
});
</script>

<template>
  <q-item clickable v-ripple @click="router.push(`/chat/${props.id}`)">
    <q-item-section>
      <div v-if="room.loading">
        <q-skeleton type="text" width="100px" />
      </div>
      <div v-else>
        <div class="text-weight-bold">{{ room.name }}</div>
        <div class="text-caption text-grey">
          {{ room.latestMessage?.text || 'No messages yet' }}
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <template v-if="room.users.length > 0">
        <OverlappingAvatars :users="room.users" right />
      </template>
    </q-item-section>
  </q-item>
</template>
