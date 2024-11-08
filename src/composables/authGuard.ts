import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';

export function useAuthGuard() {
  const auth = getAuth();
  const router = useRouter();

  const guardRoute = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/');
      }
    });
  };

  return { guardRoute };
}
