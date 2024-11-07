<script setup lang="ts">
// import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { firebaseApp } from 'src/boot/firebase';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const firestore = getFirestore(firebaseApp);

const listLoading = ref(true);
const userChatrooms = ref<Array<{ id: string; data: DocumentData }>>([]);

const fetchUserChatrooms = async () => {
  getDocs(collection(firestore, 'chatrooms'))
    .then((result) => {
      listLoading.value = false;
      result.forEach((doc) => {
        userChatrooms.value.push({ id: doc.id, data: doc.data() });
      });
    })
    .catch((error) => {
      listLoading.value = false;
      console.error('Failed fetching chatrooms', error);
    });
};

onMounted(async () => {
  await fetchUserChatrooms();
});
</script>

<template>
  <q-list bordered separator>
    <div v-if="listLoading">
      <q-item>
        <div class="col">
          <q-skeleton type="rect" width="250px" />
          <q-skeleton type="text" width="200px" />
        </div>
      </q-item>
    </div>
    <div v-else>
      <q-item v-if="userChatrooms.length == 0">
        <q-item-section>No chatrooms.</q-item-section>
      </q-item>

      <q-item
        v-else
        v-for="room in userChatrooms"
        clickable
        v-ripple
        @click="router.push(`/chat/${room.id}`)"
        :key="room.id"
      >
        <q-item-section>{{ room.data.name }}</q-item-section>
      </q-item>
    </div>
  </q-list>
</template>
