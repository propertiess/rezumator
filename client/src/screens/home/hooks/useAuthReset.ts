import { initialFields, useAuth, useFields } from '@/context';

export const useAuthReset = () => {
  const { authToken, setAuthToken } = useAuth();
  const { setFields } = useFields();

  const logout = () => {
    setAuthToken('');
    setFields(initialFields);
  };

  return {
    authToken,
    logout
  };
};
