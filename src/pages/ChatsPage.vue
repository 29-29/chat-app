<script setup lang="ts">
import ChatList from 'src/components/ChatList.vue';
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h4">Chats</div>
    <Suspense>
      <ChatList />
    </Suspense>
  </div>
</template>
