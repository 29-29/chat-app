<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      author: {
        id: '',
        displayName: '',
        photoURL: '',
      },
      message: '',
      timestamp: null,
    }),
  },
});

// Add these computed values to access the data
const message = computed(() => props.data.message);
const avatar = computed(() => props.data.author.photoURL);
const author = computed(() => props.data.author.displayName);
</script>

<template>
  <div class="row items-center no-wrap q-pa-sm">
    <q-avatar size="32px" class="q-mr-md">
      <img :src="avatar" />
    </q-avatar>
    <div class="column">
      <span class="text-caption">{{ author }}</span>
      <span class="text-body1">{{ message }}</span>
    </div>
  </div>
</template>
