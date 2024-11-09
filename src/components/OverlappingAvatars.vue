<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { User } from './models';

const props = defineProps<{
  users: User[];
  right?: boolean;
}>();

const userPhotos = ref<Array<{ id: string; url: string }>>([]);

const fetchUserPhotos = async () => {
  try {
    const userDocs = await Promise.all(
      props.users.map((user) => getDoc(doc(db, 'users', user.id)))
    );

    userPhotos.value = userDocs
      .filter((doc) => doc.exists())
      .map((doc) => ({
        id: doc.id,
        url: doc.data().photoURL || '',
      }));
  } catch (error) {
    console.error('Failed to get user photos', error);
  }
};

onMounted(fetchUserPhotos);
</script>

<template>
  <q-avatar class="overlapping" size="sm">
    <q-img
      v-for="(user, index) in userPhotos.slice(0, 3)"
      :src="user.url"
      :key="user.id"
      :class="[
        'avatar-img',
        right ? 'right-aligned' : 'left-aligned',
        `z-index-${userPhotos.length - index}`,
        `offset-${index}`,
      ]"
    >
      <q-tooltip>
        {{ users[index].displayName }}
      </q-tooltip>
    </q-img>
  </q-avatar>
</template>

<style lang="sass">
.overlapping
  position: relative

  .avatar-img
    position: absolute
    width: 64px
    height: 64px
    border-radius: 50%
    border: 2px solid $pink-5

    &.left-aligned
      &.offset-0
        left: 0
      &.offset-1
        left: 20px
      &.offset-2
        left: 40px

    &.right-aligned
      &.offset-0
        right: 0
      &.offset-1
        right: 20px
      &.offset-2
        right: 40px

    @for $i from 0 through 3
      &.z-index-#{$i}
        z-index: $i
</style>
