<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { useRouter } from 'vue-router';
import { useRoom } from 'src/composables/room';

const router = useRouter();
const props = defineProps({
  id: String,
});

const { room, fetchRoomData } = useRoom();
const userPhotos = ref<Array<{ id: string; url: string }>>([]);

const fetchUserPhotos = async () => {
  try {
    const userDocs = await Promise.all(
      room.users.map((userId) => getDoc(doc(db, 'users', userId)))
    );

    userPhotos.value = userDocs
      .filter((doc) => doc.exists())
      .map((doc) => ({
        id: doc.id,
        url: doc.data().photoURL || '',
      }));
  } catch (error) {
    console.error('Failed to get user photos', error);
  }
};

onMounted(async () => {
  await fetchRoomData(props.id as string);
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
