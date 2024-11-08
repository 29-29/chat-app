<script setup lang="ts">
//// import { getAuth } from 'firebase/auth';
import { getDocs } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
//// import { useRouter } from 'vue-router';
import ChatListItem from './ChatListItem.vue';
import { chatroomsCol } from 'src/boot/firebase';
//// const router = useRouter();

const listLoading = ref(true);
const userChatrooms = ref<Array<string>>([]);

const fetchUserChatrooms = async () => {
  getDocs(chatroomsCol)
    .then((result) => {
      listLoading.value = false;
      result.forEach((doc) => {
        userChatrooms.value.push(doc.id);
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
      <ChatListItem
        v-else
        v-for="chatroom in userChatrooms"
        :key="chatroom"
        :id="chatroom"
      />
    </div>
  </q-list>
</template>
