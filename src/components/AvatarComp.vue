<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  url: {
    type: String,
    default: '',
  },
});

const loadIcon = ref(false);
</script>
<template>
  <q-icon
    v-if="loadIcon || url == ''"
    name="account_circle"
    color="white"
    size="md"
  />
  <q-avatar v-else>
    <q-img :src="props.url" @error="loadIcon = true" />
  </q-avatar>
</template>
