<script setup lang="ts">
import { computed } from 'vue';
import { useAuth } from 'src/composables/auth';
import AvatarComp from 'src/components/AvatarComp.vue';

const { isLoggedIn, user, handleSignOut } = useAuth();

// Use computed properties instead of manual syncing
const userData = computed(() => ({
  name: user.value?.displayName || '',
  photoURL: (user.value?.photoURL as string) || '',
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
            <AvatarComp :url="user?.photoURL || ''" white />
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
    <q-footer bordered class="bg-pink-1 text-grey-8">
      <q-toolbar>
        <div class="row items-center q-gutter-sm">
          <q-btn
            dense
            no-caps
            round
            href="https://github.com/29-29/chat-app"
            target="_blank"
          >
            <q-icon name="img:src/assets/github-mark.svg" color="grey-8" />
          </q-btn>
          <div>
            Made with <q-icon name="favorite" color="pink-13" size="sm" /> by
          </div>
          <q-btn
            no-caps
            dense
            rounded
            unelevated
            color="pink-13"
            href="https://github.com/29-29"
            target="_blank"
            label="Ahmad"
            class="q-px-sm"
          />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
