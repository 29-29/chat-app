<script setup lang="ts">
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import ChatListItem from './ChatListItem.vue';
import { chatroomsCol, db } from 'src/boot/firebase';
import { user } from 'src/composables/auth';

const listLoading = ref(true);
const userChatrooms = ref<Array<string>>([]);

const fetchUserChatrooms = async () => {
  const userDoc = await getDoc(doc(db, 'users', user.value?.uid || ''));
  const userRooms = userDoc.data()?.rooms || [];

  onSnapshot(
    chatroomsCol,
    (snapshot) => {
      listLoading.value = false;
      userChatrooms.value = [];
      snapshot.forEach((doc) => {
        if (userRooms.includes(doc.id)) {
          userChatrooms.value.push(doc.id);
        }
      });
    },
    (error) => {
      console.error('Error with chatrooms subscription:', error);
      listLoading.value = false;
      userChatrooms.value = [];
    }
  );
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
