<script setup lang="ts">
import { computed } from 'vue';
import { useAuth } from 'src/composables/auth';

const { isLoggedIn, user, handleSignOut } = useAuth();

// Use computed properties instead of manual syncing
const userData = computed(() => ({
  name: user.value?.displayName || '',
  photoURL: user.value?.photoURL || '',
}));

// Loading state based on user availability
const userLoading = computed(() => !user.value);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-pink-5">
        <q-toolbar-title>Ahmad Chat App</q-toolbar-title>
        <template v-if="isLoggedIn">
          <div v-if="userLoading" class="q-px-md row q-gutter-sm">
            <q-skeleton type="QAvatar" size="sm" />
          </div>
          <div v-else class="q-mx-sm row q-gutter-sm items-center">
            <div>{{ userData.name }}</div>
            <q-avatar size="md">
              <img :src="userData.photoURL" />
            </q-avatar>
          </div>
          <div>
            <q-btn
              label="sign out"
              color="white"
              text-color="negative"
              @click="handleSignOut"
            />
          </div>
        </template>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
