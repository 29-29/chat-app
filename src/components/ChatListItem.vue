<script setup lang="ts">
import { doc, getDoc } from 'firebase/firestore';
import { onMounted, reactive, ref } from 'vue';
// import { getAuth } from 'firebase-admin/auth';
import { db } from 'src/boot/firebase';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: String,
});
const room = reactive({
  code: '',
  name: '',
  users: [],
  loading: true,
});
const userPhotos = ref<Array<{ id: string; url: string }>>([]);

const fetchRoomData = async () => {
  const roomDocRef = doc(db, `chatrooms/${props.id}`);
  await getDoc(roomDocRef)
    .then((result) => {
      const data = result.data();
      room.code = data?.code;
      room.name = data?.name;
      room.users = data?.users;
      room.loading = false;
    })
    .catch((error) => {
      console.error('Failed to fetch room data', error);
    });
};

const fetchUserPhotos = async () => {
  try {
    // Get all user docs in a single batch
    const userDocs = await Promise.all(
      room.users.map((userId) => getDoc(doc(db, 'users', userId)))
    );

    // Process results
    userPhotos.value = userDocs
      .filter((doc) => doc.exists())
      .map((doc) => ({
        id: doc.id,
        url: doc.data().photoURL || '', // or a default photo URL
      }));
  } catch (error) {
    console.error('Failed to get user photos', error);
  }
};

onMounted(async () => {
  await fetchRoomData();
  await fetchUserPhotos();
});
</script>

<template>
  <q-item clickable v-ripple @click="router.push(`/chat/${props.id}`)">
    <q-item-section>
      <div v-if="room.loading">
        <q-skeleton type="text" width="100px" />
      </div>
      <div v-else>{{ room.name }}</div>
    </q-item-section>
    <q-item-section side>
      <q-avatar class="overlapping" size="sm">
        <img v-for="user in userPhotos" :src="user.url" :key="user.id" />
      </q-avatar>
    </q-item-section>
  </q-item>
</template>
