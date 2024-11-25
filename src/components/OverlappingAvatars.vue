<script setup lang="ts">
import { computed } from 'vue';
import { User } from './models';

import AvatarComp from './AvatarComp.vue';

const props = defineProps({
  users: {
    type: Array<User>,
    default: [],
    required: true,
  },
  left: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
});

const visibleUsers = computed(() => {
  const users = props.users.slice(0, 3);

  return props.left ? users.reverse() : users;
});

const remainingCount = computed(() => Math.max(0, props.users.length - 3));
</script>

<template>
  <div class="row items-center no-wrap" :class="{ 'justify-end': left }">
    <div class="overlapping-container" :class="{ 'align-right': left }">
      <q-badge
        rounded
        v-if="remainingCount > 0"
        class="remaining-badge"
        :class="{ 'badge-left': left }"
        color="pink-8"
      >
        +{{ remainingCount }}
      </q-badge>

      <avatar-comp
        v-for="(user, index) in visibleUsers"
        :key="user.id"
        size="sm"
        class="overlapping"
        :style="`${left ? 'right' : 'left'}: ${index * 0.75}em; z-index: ${
          left ? index + 1 : visibleUsers.length - index
        }`"
        :white="white"
      >
        <img :src="user.photoURL || ''" class="avatar-img" />
      </avatar-comp>

      <q-tooltip>
        {{ props.users.map((user) => user.displayName).join('\n') }}
      </q-tooltip>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.overlapping-container
  position: relative
  width: 3em
  height: 2em
  display: flex
  align-items: center

.align-right
  position: relative
  left: 100%
  transform: translateX(-100%)

.overlapping
  position: absolute

.avatar-img
  border: 2px solid $pink-8
  border-radius: 50%

.remaining-badge
  position: absolute
  right: -2em
  min-width: 1.125em
  height: 1.125em
  font-size: 0.625em
  padding: 0 0.25em
  z-index: 4

.badge-left
  right: unset
  left: -4em
</style>
