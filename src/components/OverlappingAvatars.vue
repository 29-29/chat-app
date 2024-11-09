<script setup lang="ts">
import { computed } from 'vue';
import { User } from './models';

const props = defineProps<{
  users: User[];
  right?: boolean;
}>();

const visibleUsers = computed(() => props.users.slice(0, 3));
const remainingCount = computed(() => Math.max(0, props.users.length - 3));
</script>

<template>
  <div
    class="row items-center no-wrap"
    :class="{ 'justify-end': right, 'flex-row-reverse': right }"
  >
    <q-chip
      v-if="remainingCount > 0"
      dense
      size="sm"
      :class="right ? 'q-mr-sm' : 'q-ml-sm'"
      color="grey-7"
      text-color="white"
    >
      +{{ remainingCount }}
    </q-chip>
    <q-avatar class="overlapping" size="sm">
      <q-img
        v-for="(user, index) in visibleUsers"
        :src="user.photoURL || ''"
        :key="user.id"
        :class="[
          'avatar-img',
          right ? 'right' : 'left',
          `z-index-${visibleUsers.length - index}`,
          `offset-${index}`,
        ]"
      >
        <q-tooltip>
          {{ user.displayName }}
        </q-tooltip>
      </q-img>
    </q-avatar>
  </div>
</template>

<style scoped>
.overlapping {
  position: relative;
  width: 32px;
}

.avatar-img {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 2px solid white;
  border-radius: 50%;
}

.left.offset-0 {
  left: 0;
}
.left.offset-1 {
  left: 12px;
}
.left.offset-2 {
  left: 24px;
}

.right.offset-0 {
  right: 0;
}
.right.offset-1 {
  right: 12px;
}
.right.offset-2 {
  right: 24px;
}

.z-index-1 {
  z-index: 1;
}
.z-index-2 {
  z-index: 2;
}
.z-index-3 {
  z-index: 3;
}
</style>
