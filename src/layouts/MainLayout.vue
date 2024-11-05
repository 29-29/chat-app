<script setup lang="ts">
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = ref(false);

let auth: Auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  });
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-pink-5">
        <q-toolbar-title>Ahmad Chat App</q-toolbar-title>

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
