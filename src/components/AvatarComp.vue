<script setup lang="ts">
import { ref } from 'vue';
import { useSlots } from 'vue';

const slots = useSlots();

const props = defineProps({
  url: {
    type: String,
    default: '',
  },
  white: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
});

const loadIcon = ref(false);
</script>
<template>
  <q-icon
    v-if="(loadIcon || url == '') && !slots.content"
    name="account_circle"
    :color="props.white ? 'white' : 'pink-5'"
    :size="props.size"
  />
  <q-avatar :size="props.size" v-else>
    <slot v-if="slots.content" />
    <q-img v-else :src="props.url" @error="loadIcon = true" />
  </q-avatar>
</template>
