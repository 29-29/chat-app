<script setup lang="ts">
import { doc, onSnapshot, getDoc, query, where } from 'firebase/firestore';
import { onMounted, ref, onUnmounted, computed } from 'vue';
import ChatListItem from './ChatListItem.vue';
import { db, chatroomsCol } from 'src/boot/firebase';
import { user } from 'src/composables/auth';

const listLoading = ref(true);
const userChatrooms = ref<Array<{ id: string; lastMessageTime: number }>>([]);
const publicRooms = ref<Array<{ id: string; lastMessageTime: number }>>([]);
let unsubscribeUser: (() => void) | null = null;
let unsubscribePublic: (() => void) | null = null;

const subscribeToUserRooms = async () => {
  if (!user.value?.uid) return;

  unsubscribeUser = onSnapshot(
    doc(db, 'users', user.value.uid),
    async (userDoc) => {
      const roomIds = userDoc.data()?.rooms || [];

      const roomsWithTimestamp = await Promise.all(
        roomIds.map(async (roomId: string) => {
          const roomDoc = await getDoc(doc(chatroomsCol, roomId));
          const roomData = roomDoc.data();
          return {
            id: roomId,
            lastMessageTime: roomData?.lastMessageTime?.toMillis() || 0,
          };
        })
      );

      userChatrooms.value = roomsWithTimestamp;
      listLoading.value = false;
    }
  );
};

const subscribeToPublicRooms = () => {
  const publicRoomsQuery = query(chatroomsCol, where('private', '==', false));

  unsubscribePublic = onSnapshot(publicRoomsQuery, async (snapshot) => {
    const publicRoomsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      lastMessageTime: doc.data().lastMessageTime?.toMillis() || 0,
    }));
    publicRooms.value = publicRoomsData;
  });
};

// Combine and sort all rooms
const allRooms = computed(() => {
  const userRoomIds = new Set(userChatrooms.value.map((room) => room.id));

  // Filter out public rooms that user is already a member of
  const uniquePublicRooms = publicRooms.value.filter(
    (room) => !userRoomIds.has(room.id)
  );

  return [...userChatrooms.value, ...uniquePublicRooms].sort(
    (a, b) => b.lastMessageTime - a.lastMessageTime
  );
});

onMounted(async () => {
  await subscribeToUserRooms();
  subscribeToPublicRooms();
});

onUnmounted(() => {
  unsubscribeUser?.();
  unsubscribePublic?.();
});
</script>

<template>
  <q-list bordered separator>
    <template v-if="listLoading">
      <q-item>
        <div class="col">
          <q-skeleton type="rect" width="250px" />
          <q-skeleton type="text" width="200px" />
        </div>
      </q-item>
    </template>
    <template v-else>
      <q-item v-if="allRooms.length === 0">
        <q-item-section>No chatrooms available.</q-item-section>
      </q-item>
      <ChatListItem
        v-else
        v-for="room in allRooms"
        :key="room.id"
        :id="room.id"
        :max-length="100"
      />
    </template>
  </q-list>
</template>
