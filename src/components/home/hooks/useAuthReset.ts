import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useSetFieldsByIdMutation } from '@/store/api/fields.api';
import { useActions } from '@/store/hooks/useActions';
import { initialRezumator } from '@/utils/constants/initial_fields';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [_, { reset }] = useSetFieldsByIdMutation({
    fixedCacheKey: 'cache'
  });
  const { setRezumator } = useActions();
  const router = useRouter();

  const logout = () => {
    setAuthToken('');
    reset();
    setRezumator(initialRezumator);
    router.push('/');
  };

  return {
    authToken,
    logout
  };
};
