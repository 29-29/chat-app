<script setup lang="ts">
import SignInComponent from 'src/components/SignInComponent.vue';
import { useAuth } from 'src/composables/auth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { isLoggedIn } = useAuth();

onMounted(() => {
  if (isLoggedIn.value) {
    router.push('/chats');
  }
});
</script>

<template>
  <q-card
    class="fixed-center q-pa-lg text-center text-pink-5"
    style="border-color: var(--pink-5)"
    flat
    bordered
  >
    <q-card-section class="text-h4 q-pt-none">Ahmad Chat App</q-card-section>
    <SignInComponent />
  </q-card>
</template>
