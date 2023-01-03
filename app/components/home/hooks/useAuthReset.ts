import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useActions } from '@/store/hooks/useActions';
import { initialRezumator } from '@/utils/constants/initial_fields';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const { setRezumator } = useActions();
  const router = useRouter();

  const disconnect = () => {
    setAuthToken('');
    setRezumator(initialRezumator);
    router.push('/');
  };

  return {
    authToken,
    disconnect
  };
};
