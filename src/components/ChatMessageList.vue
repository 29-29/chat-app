<script setup lang="ts">
import { ref, defineProps, onMounted, computed } from 'vue';
import { MessageData } from './ChatMessage.vue';
import ChatMessage from './ChatMessage.vue';
import { QScrollArea, scroll } from 'quasar';
const {
  // getVerticalScrollPosition,
  // setVerticalScrollPosition,
  // getScrollHeight,
} = scroll;

const props = defineProps<{
  messages: {
    id: string;
    data: MessageData;
  }[];
}>();

const scrollAreaRef = ref<QScrollArea | null>(null);
const scrollHeight = computed(
  () => scrollAreaRef.value?.getScrollTarget().scrollHeight as number
);
const clientHeight = computed(
  () => scrollAreaRef.value?.getScrollTarget().clientHeight as number
);
const scrollPercentage = computed(
  () => scrollAreaRef.value?.getScrollPercentage().top
);
const showToBottomBtn = computed(() => {
  return scrollHeight.value > clientHeight.value && scrollPercentage.value != 1;
});
const scrollToBottom = () => {
  scrollAreaRef.value?.setScrollPercentage('vertical', 1, 300);
};

onMounted(() => {
  scrollAreaRef.value?.setScrollPercentage('vertical', 1, 300);
  setTimeout(() => {}, 300);
  scrollToBottom();
});
</script>

<template>
  <q-card flat bordered class="messages-container rounded-borders">
    <q-scroll-area ref="scrollAreaRef" style="height: inherit">
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
      <TransitionGroup name="toBottomBtn">
        <q-page-sticky v-if="showToBottomBtn" position="bottom" class="q-mb-md">
          <q-btn
            color="pink-5"
            @click="scrollToBottom"
            :label="scrollPercentage"
            dense
          />
        </q-page-sticky>
      </TransitionGroup>
    </q-scroll-area>
  </q-card>
</template>

<style lang="sass" scoped>
.messages-container
  border:1px solid $pink-5
.q-item:not(:last-child)
  border-bottom: 1px solid $pink-11
.toBottomBtn-enter-active,
.toBottomBtn-leave-active
  transition: all $animate-duration ease
.toBottomBtn-enter-from,
.toBottomBtn-leave-to
  opacity: 0
  transform: translateX(16px)
</style>
