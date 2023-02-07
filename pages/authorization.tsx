import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useRef, useState } from 'react';

import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import { AuthFields } from '@/components/common/auth-fields';
import { Button } from '@/components/common/ui';

import { useAuthForm } from '@/hooks';
import { useActions } from '@/store/hooks/useActions';

import { AuthContext } from '@/context';

import { AuthService, SimpleUser } from '@/services/auth';

import { Layout } from '@/layout';

type SubmitEvent = Event & {
  submitter: HTMLButtonElement;
};

const Authorization: NextPage = () => {
  const pickAuthType = useRef<'login' | 'signup' | null>(null);

  const [error, setError] = useState('');
  const { register, errors, handleSubmit, isSubmitting } = useAuthForm();

  const { setAuthToken } = useContext(AuthContext);
  const { setRezumator } = useActions();

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
    <Layout title='Авторизация' description='Регистрация или вход в аккаунт'>
      <div className='max-w-[18rem] sm:max-w-[31rem] mx-auto mt-5'>
        <form
          className='flex flex-col justify-center items-center p-5 gap-10 rounded-lg border border-white border-opacity-20 mx-auto'
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
          <div className='ml-auto'>
            <Button
              name='login'
              loader={isSubmitting && pickAuthType.current === 'login'}
              type='submit'
              className='mr-2'
            >
              Войти
            </Button>
            <Button
              name='signup'
              loader={isSubmitting && pickAuthType.current === 'signup'}
              type='submit'
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
