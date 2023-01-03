import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { RezumatorService } from '@/services/rezumator/rezumator.service';
import { useActions } from '@/store/hooks/useActions';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const { setRezumator } = useActions();
  const router = useRouter();

  const disconnect = async () => {
    setAuthToken('');
    const fields = await RezumatorService.getInitialFields();
    setRezumator(fields);
    router.push('/');
  };

  return {
    authToken,
    disconnect
  };
};
