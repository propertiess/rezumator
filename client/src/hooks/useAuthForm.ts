import { useForm } from 'react-hook-form';

import { SimpleUser } from '@/services/auth/auth.types';

export const useAuthForm = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
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
    errors,
    isSubmitting,
    isSubmitSuccessful
  };
};
