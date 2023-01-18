import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import { AuthForm } from '@/components/common/auth-form';

import { useAuthForm } from '@/hooks';
import { useActions } from '@/store/hooks/useActions';

import { AuthContext } from '@/context';

import { AuthService, SimpleUser } from '@/services/auth';

import { Layout } from '@/layout';

const Login: NextPage = () => {
  const [error, setError] = useState('');
  const { register, errors, handleSubmit, isSubmitting } = useAuthForm();
  const { setRezumator } = useActions();

  const { push } = useRouter();
  const { setAuthToken } = useContext(AuthContext);

  const login: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    error && setError('');

    try {
      const user = await AuthService.login(username.trim(), password.trim());

      setAuthToken(user._id);
      setRezumator(user.fields);
      push('/rezumator');
    } catch (e) {
      setError(
        (e as AxiosError<{ message: string }>).response?.data?.message ??
          'error'
      );
    }
  };

  return (
    <Layout title='Авторизация' description='Авторизация'>
      <AuthForm
        register={register}
        error={error}
        errors={errors}
        onSubmit={handleSubmit(login)}
        submitButtonText='Войти'
        isSubmitting={isSubmitting}
      />
    </Layout>
  );
};

export default Login;
