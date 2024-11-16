<script setup lang="ts">
import { doc, onSnapshot, query, where, getDoc } from 'firebase/firestore';
import { onMounted, ref, onUnmounted, computed } from 'vue';
import ChatListItem from './ChatListItem.vue';
import { db, chatroomsCol } from 'src/boot/firebase';
import { user } from 'src/composables/auth';

const props = defineProps({
  private: {
    default: false,
    type: Boolean,
  },
  public: {
    default: false,
    type: Boolean,
  },
});

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
      const roomIds: Array<string> = userDoc.data()?.rooms || [];
      const promises = roomIds.map((roomId) => {
        const roomRef = getDoc(doc(db, 'chatrooms', roomId));
        return roomRef;
      });
      Promise.all(promises).then((docs) => {
        docs.forEach((doc) => {
          const roomData = doc.data();
          if (roomData?.private)
            userChatrooms.value.push({
              id: doc.id,
              lastMessageTime: roomData?.lastMessageTime?.toMillis() || 0,
            });
        });
      });
    }
  );
};

const subscribeToPublicRooms = () => {
  const publicRoomsQuery = query(chatroomsCol, where('private', '==', false));

  unsubscribePublic = onSnapshot(publicRoomsQuery, async (snapshot) => {
    const publicRoomsData = snapshot.docs.map((doc) => {
      const docData = doc.data();
      return {
        id: doc.id,
        lastMessageTime: docData?.lastMessageTime?.toMillis() || 0,
      };
    });
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
  if (props.public && !props.private) subscribeToPublicRooms();
  else if (props.private && !props.public) await subscribeToUserRooms();
  else {
    subscribeToPublicRooms();
    subscribeToUserRooms();
  }
  listLoading.value = false;
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
      <q-item
        v-if="
          (props.private
            ? userChatrooms.length
            : props.public
            ? publicRooms.length
            : allRooms.length) === 0
        "
      >
        <q-item-section>No chatrooms available.</q-item-section>
      </q-item>
      <ChatListItem
        v-else
        v-for="room in props.public
          ? publicRooms
          : props.private
          ? userChatrooms
          : allRooms"
        :key="room.id"
        :id="room.id"
        :max-length="100"
      />
    </template>
  </q-list>
</template>
