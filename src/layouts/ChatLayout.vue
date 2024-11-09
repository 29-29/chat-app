<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from 'src/composables/auth';
import { useRoom } from 'src/composables/room';
import OverlappingAvatars from 'src/components/OverlappingAvatars.vue';
import { doc, onSnapshot } from 'firebase/firestore';
import { chatroomsCol } from 'src/boot/firebase';

const router = useRouter();
const route = useRoute();
const roomID = <string>route.params?.id;
const { isLoggedIn, handleSignOut } = useAuth();
const { room, fetchRoomData, joinRoom } = useRoom(roomID);

let unsubscribe: (() => void) | null = null;

const subscribeToRoomChanges = (roomId: string) => {
  unsubscribe = onSnapshot(doc(chatroomsCol, roomId), (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.data();
      room.users = data.users || [];
    }
  });
};

onMounted(async () => {
  const roomId = route.params.id as string;
  await fetchRoomData();
  await joinRoom();
  subscribeToRoomChanges(roomId);
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-pink-5">
        <q-btn icon="arrow_back" round flat @click="router.back" />
        <q-toolbar-title>
          <div v-if="room.loading">
            <q-skeleton type="rect" width="100px" />
          </div>
          <div v-else class="flex items-center q-gutter-sm">
            <span class="text-weight-bold">{{ room.name }}</span>
            <OverlappingAvatars :users="room.users" />
          </div>
        </q-toolbar-title>

        <div>
          <q-btn
            label="sign out"
            color="white"
            text-color="negative"
            v-if="isLoggedIn"
            @click="handleSignOut"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
