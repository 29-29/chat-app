<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log('successfully signed in!', result);
      router.push('/chats').catch((error) => {
        console.error('failed to push route', error);
      });
    })
    .catch((error) => {
      console.error('failed to sign in!', error);
    });
};
</script>

<template>
  <q-btn
    label="Sign in with Google"
    rounded
    outline
    text-color="pink-5"
    icon="login"
    @click="signInWithGoogle"
  />
</template>
