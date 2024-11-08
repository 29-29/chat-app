<script setup lang="ts">
import { doc, onSnapshot } from 'firebase/firestore';
import { onMounted, ref, onUnmounted } from 'vue';
import ChatListItem from './ChatListItem.vue';
import { db } from 'src/boot/firebase';
import { user } from 'src/composables/auth';

const listLoading = ref(true);
const userChatrooms = ref<Array<string>>([]);
let unsubscribe: (() => void) | null = null;

const subscribeToUserRooms = async () => {
  if (!user.value?.uid) return;

  unsubscribe = onSnapshot(
    doc(db, 'users', user.value.uid),
    (userDoc) => {
      listLoading.value = false;
      userChatrooms.value = userDoc.data()?.rooms || [];
    },
    (error) => {
      console.error('Error with user rooms subscription:', error);
      listLoading.value = false;
      userChatrooms.value = [];
    }
  );
};

onMounted(async () => {
  await subscribeToUserRooms();
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
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
      <q-item v-if="userChatrooms.length === 0">
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
