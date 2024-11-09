<script setup lang="ts">
import { computed } from 'vue';
import { User } from './models';
import { Timestamp } from 'firebase/firestore';

interface MessageData {
  author: User;
  message: string;
  timestamp: Timestamp;
}

const props = defineProps<{
  data: MessageData;
}>();

const message = computed(() => props.data?.message || '');
const avatar = computed(() => props.data?.author?.photoURL || '');
const author = computed(
  () => props.data?.author?.displayName || 'Unknown User'
);
</script>

<template>
  <div class="row items-center no-wrap q-pa-sm">
    <q-avatar size="32px" class="q-mr-md">
      <img :src="avatar" />
    </q-avatar>
    <div class="column">
      <span class="text-caption">{{ author }}</span>
      <span class="text-body1">
        {{ message }}
        <q-chip dense size="sm" class="q-ml-sm text-grey-7 self-center">
          {{
            props.data?.timestamp?.toDate().toLocaleDateString() ===
            new Date().toLocaleDateString()
              ? props.data?.timestamp?.toDate().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : props.data?.timestamp
                  ?.toDate()
                  .toLocaleString([], { hour: '2-digit', minute: '2-digit' })
          }}
        </q-chip>
      </span>
    </div>
  </div>
</template>
