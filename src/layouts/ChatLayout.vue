<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from 'src/composables/auth';
import { useRoom } from 'src/composables/room';

const router = useRouter();
const route = useRoute();
const { isLoggedIn, handleSignOut } = useAuth();
const { room, fetchRoomData } = useRoom();

onMounted(() => {
  fetchRoomData(route.params.id as string);
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
          <div v-else>
            {{ room.name }}
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
