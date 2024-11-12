<script setup lang="ts">
import ChatMessage, { MessageData } from './ChatMessage.vue';

defineProps<{
  messages: { id: string; data: MessageData }[];
}>();
</script>

<template>
  <q-scroll-area>
    <q-list dense class="full-height">
      <div v-if="messages.length === 0" class="text-center q-pa-md text-grey">
        <q-icon name="chat" size="48px" color="grey-4" />
        <div class="text-h6 q-mt-sm">No messages yet</div>
        <div class="text-caption">Be the first to start the conversation!</div>
      </div>

      <q-item v-else v-for="message in messages" :key="message.id">
        <ChatMessage :data="message.data" />
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<style lang="sass" scoped>
.q-item
  border-bottom: 1px solid $pink-11
</style>
