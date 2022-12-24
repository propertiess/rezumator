import { useForm } from 'react-hook-form';
import { SimpleUser } from '@/services/auth/auth.types';

export const useAuthForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<SimpleUser>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: ''
    }
  });

  return {
    register,
    handleSubmit,
    errors
  };
};
