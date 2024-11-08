import { User } from 'firebase/auth';
import { ref } from 'vue';
import { useAuth } from './auth';

const currentUser = ref<User | null>(null);

export function useCurrentUser() {
  const { user } = useAuth();
  currentUser.value = user.value;

  return {
    currentUser,
  };
}
