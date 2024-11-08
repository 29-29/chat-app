<script setup lang="ts">
import SignInComponent from 'src/components/SignInComponent.vue';
import { useAuth } from 'src/composables/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { isLoggedIn, authInitialized } = useAuth();
const isLoading = ref(false);

const handleSignInStart = () => {
  isLoading.value = true;
};

const handleSignInEnd = () => {
  isLoading.value = false;
};

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
    <q-spinner-dots
      v-if="isLoading || authInitialized === undefined"
      color="pink-5"
      size="2em"
    />
    <SignInComponent
      v-else
      @sign-in-start="handleSignInStart"
      @sign-in-end="handleSignInEnd"
    />
  </q-card>
</template>
