<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { MessageData } from './ChatMessage.vue';
import ChatMessage from './ChatMessage.vue';

const props = defineProps<{
  messages: {
    id: string;
    data: MessageData;
  }[];
}>();

const scrollArea = ref<Element | null>(null);
</script>

<template>
  <q-card flat bordered class="messages-container rounded-borders">
    <q-scroll-area ref="scrollArea" style="height: inherit">
      <q-list dense class="full-height" ref="list">
        <div
          v-if="props.messages.length === 0"
          class="text-center q-pa-md text-grey"
        >
          <q-icon name="chat" size="48px" color="grey-4" />
          <div class="text-h6 q-mt-sm">No messages yet</div>
          <div class="text-caption">
            Be the first to start the conversation!
          </div>
        </div>

        <q-item v-else v-for="message in props.messages" :key="message.id">
          <ChatMessage :data="message.data" />
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-card>
</template>

<style lang="sass" scoped>
.messages-container
  border:1px solid $pink-5
.q-item
  border-bottom: 1px solid $pink-11
</style>
