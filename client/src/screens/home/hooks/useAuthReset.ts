import { useRouter } from 'next/router';

import { useAuthStore } from '@/store/auth/Auth';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useAuthStore();
  const router = useRouter();

  const logout = () => {
    setAuthToken('');
    router.push('/');
  };

  return {
    authToken,
    logout,
  };
};
