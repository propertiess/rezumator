import { useAuthStore } from '@/store/auth/Auth';

export const useAuthReset = () => {
  const { removeToken, isUser } = useAuthStore();

  const logout = () => {
    removeToken();
  };

  return {
    isUser,
    logout,
  };
};
