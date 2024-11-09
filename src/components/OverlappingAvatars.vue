<script setup lang="ts">
import { computed } from 'vue';
import { User } from './models';

const props = defineProps<{
  users: User[];
}>();

const visibleUsers = computed(() => props.users.slice(0, 3));
const remainingCount = computed(() => Math.max(0, props.users.length - 3));
</script>

<template>
  <div class="row items-center no-wrap">
    <div class="overlapping-container">
      <q-avatar
        v-for="(user, index) in visibleUsers"
        :key="user.id"
        size="sm"
        class="overlapping"
        :style="`right: ${index * 0.75}em; z-index: ${
          visibleUsers.length - index
        }`"
      >
        <img :src="user.photoURL || ''" class="avatar-img" />
      </q-avatar>
      <q-tooltip>
        {{ props.users.map((user) => user.displayName).join('\n') }}
      </q-tooltip>
      <q-badge
        rounded
        v-if="remainingCount > 0"
        class="remaining-badge"
        color="pink-8"
      >
        +{{ remainingCount }}
      </q-badge>
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
</style>
