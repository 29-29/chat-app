import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { db } from 'src/boot/firebase';

// Move user ref outside the function to make it a singleton
export const user = ref<User | null>(null);

export function useAuth() {
  const auth = getAuth();
  const router = useRouter();
  const isLoggedIn = ref(false);

  const createUserIfNotExists = async (currentUser: User) => {
    const userRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      await setDoc(userRef, {
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        rooms: [],
      });
    }
  };

  const initAuth = () => {
    onAuthStateChanged(auth, async (currentUser) => {
      user.value = currentUser;
      isLoggedIn.value = !!currentUser;

      const currentRoute = router.currentRoute.value;
      if (currentUser) {
        // Create user document if it doesn't exist
        await createUserIfNotExists(currentUser);

        // Handle routing
        if (currentRoute.path === '/') {
          router.push('/chats');
        }
      } else {
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
