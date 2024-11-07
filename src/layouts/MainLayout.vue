<script setup lang="ts">
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
let auth: Auth;
const userData = reactive({
  name: '',
  photoURL: '',
});
const userLoading = ref(true);

const fetchUserData = async () => {
  userData.name = <string>auth.currentUser?.displayName;
  userData.photoURL = <string>auth.currentUser?.photoURL;
  userLoading.value = false;
};

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      fetchUserData();
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
        <div v-if="userLoading" class="q-px-md">
          <q-skeleton type="rect" height="30px" width="150px" />
        </div>
        <div v-else class="q-mx-sm">
          {{ userData.name }}
          <q-avatar size="md" class="q-mx-sm">
            <img :src="userData.photoURL" />
          </q-avatar>
        </div>
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
