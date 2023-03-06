import { useRouter } from 'next/router';

import { useAuth } from '@/context';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useAuth();
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
