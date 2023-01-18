import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import { AuthForm } from '@/components/common/auth-form';

import { useAuthForm } from '@/hooks';

import { AuthContext } from '@/context';

import { AuthService, SimpleUser } from '@/services/auth';

import { Layout } from '@/layout';

const SignUp: NextPage = () => {
  const [error, setError] = useState('');
  const { register, errors, handleSubmit, isSubmitting } = useAuthForm();

  const { setAuthToken } = useContext(AuthContext);
  const { push } = useRouter();

  const signUp: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    error && setError('');

    try {
      const user = await AuthService.createUser(username, password);
      
      setAuthToken(user._id);
      push('/rezumator');
    } catch (e) {
      setError(
        (e as AxiosError<{ message: string }>).response?.data?.message ??
          'error'
      );
    }
  };

  return (
    <Layout title='Signup' description='Signup'>
      <AuthForm
        register={register}
        error={error}
        errors={errors}
        onSubmit={handleSubmit(signUp)}
        submitButtonText='Зарегистрироваться'
        isSubmitting={isSubmitting}
      />
    </Layout>
  );
};

export default SignUp;
