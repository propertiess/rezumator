import { useRouter } from 'next/router';

import { useAuth, useFields } from '@/context';
import { initialRezumator } from '@/utils/constants/initial_fields';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useAuth();
  const { setFields } = useFields();
  // const [, { reset }] = useSetFieldsByIdMutation({
  //   fixedCacheKey: 'cache'
  // });
  // const { setRezumator } = useActions();
  const router = useRouter();

  const logout = () => {
    setAuthToken('');
    // reset();
    setFields(initialRezumator);
    router.push('/');
  };

  return {
    authToken,
    logout
  };
};
