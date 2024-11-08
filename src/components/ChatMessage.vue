<script setup lang="ts">
defineProps({
  avatar: String,
  name: String,
  message: String,
});
</script>

<template>
  <q-avatar>
    <img :src="avatar" />
  </q-avatar>
  {{ message }}
</template>
