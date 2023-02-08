import { useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AuthFields } from '@/components/common/auth-fields';
import { Button } from '@/components/common/ui';
import { useAuth, useFields } from '@/context';
import { useAuthForm } from '@/hooks';
import { Layout } from '@/layout';
import { AuthService, SimpleUser } from '@/services/auth';

type SubmitEvent = Event & {
  submitter: HTMLButtonElement;
};

const Authorization: NextPage = () => {
  const pickAuthType = useRef<'login' | 'signup' | null>(null);

  const [error, setError] = useState('');
  const { register, errors, handleSubmit, isSubmitting } = useAuthForm();
  const { setFields } = useFields();

  const { setAuthToken } = useAuth();
  // const { setRezumator } = useActions();

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

  const login: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    error && setError('');

    try {
      const user = await AuthService.login(username.trim(), password.trim());
      setAuthToken(user._id);
      setFields(user.fields);
      push('/rezumator');
    } catch (e) {
      setError(
        (e as AxiosError<{ message: string }>).response?.data?.message ??
          'error'
      );
    }
  };

  return (
    <Layout title='Авторизация' description='Регистрация или вход в аккаунт'>
      <div className='mx-auto mt-5 max-w-[18rem] sm:max-w-[31rem]'>
        <form
          className='mx-auto flex flex-col items-center justify-center gap-10 rounded-lg border border-white border-opacity-20 p-5'
          onSubmit={e => {
            e.preventDefault();

            if ((e.nativeEvent as SubmitEvent).submitter.name === 'login') {
              pickAuthType.current = 'login';
              handleSubmit(login)(e);
            } else {
              pickAuthType.current = 'signup';
              handleSubmit(signUp)(e);
            }
          }}
        >
          <AuthFields register={register} errors={errors} />
          {error && <span className='text-red-500'>{error}</span>}
          <div className='ml-auto flex flex-wrap gap-3'>
            <Button
              name='login'
              loader={isSubmitting && pickAuthType.current === 'login'}
              type='submit'
              className='w-full sm:w-auto'
            >
              Войти
            </Button>
            <Button
              name='signup'
              loader={isSubmitting && pickAuthType.current === 'signup'}
              type='submit'
              className='w-full sm:w-auto'
            >
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Authorization;
