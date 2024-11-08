<script setup lang="ts">
import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'src/boot/firebase';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isLoggedIn = ref(false);
const room = reactive({
  loading: true,
  name: '',
});

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
  fetchRoomData();
  console.log(auth.currentUser);
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  });
};

const fetchRoomData = async () => {
  const firestore = getFirestore(firebaseApp);
  const roomDocRef = doc(firestore, `chatrooms/${route.params.id}`);
  await getDoc(roomDocRef)
    .then((result) => {
      room.name = result.data()?.name;
      room.loading = false;
    })
    .catch((error) => {
      console.error('Room not found', error);
    });
};
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
