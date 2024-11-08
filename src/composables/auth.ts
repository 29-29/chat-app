import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// Move user ref outside the function to make it a singleton
export const user = ref<User | null>(null);

export function useAuth() {
  const auth = getAuth();
  const router = useRouter();
  const isLoggedIn = ref(false);

  const initAuth = () => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
      isLoggedIn.value = !!currentUser;

      // Handle route based on auth state
      const currentRoute = router.currentRoute.value;
      if (currentUser) {
        // If user is logged in and on landing page, redirect to chats
        if (currentRoute.path === '/') {
          router.push('/chats');
        }
      } else {
        // If user is not logged in and on protected route, redirect to landing
        if (currentRoute.meta.requiresAuth) {
          router.push('/');
        }
      }
    });
  };

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  onMounted(() => {
    initAuth();
  });

  return {
    isLoggedIn,
    user,
    handleSignOut,
  };
}
