import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { AuthFields } from '@/components/auth-fields';
import { Button } from '@/components/ui';
import { useFields } from '@/context';
import { useAuthForm } from '@/hooks';
import { Layout } from '@/layout';
import { AuthService, SimpleUser } from '@/services/auth';
import { useAuthStore } from '@/store/auth/Auth';

type SubmitEvent = Event & {
  submitter: HTMLButtonElement;
};

const Authorization = () => {
  const [type, setType] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState('');
  const { register, errors, handleSubmit, isSubmitting } = useAuthForm();

  const { setAuthToken } = useAuthStore();
  const { fields } = useFields();

  const { push } = useRouter();

  const signUp: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    error && setError('');

    try {
      const user = await AuthService.createUser(username, password, fields);
      setAuthToken(user._id);
      push(`/resume/edit/${user.fields._id}`);
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
      push(`/resume/edit/${user.fields._id}`);
    } catch (e) {
      e instanceof AxiosError && setError(e.response?.data?.message ?? 'error');
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
              handleSubmit(login)(e);
            } else {
              handleSubmit(signUp)(e);
            }
          }}
        >
          <AuthFields register={register} errors={errors} />
          {error && <span className='text-red-500'>{error}</span>}
          <div className='ml-auto flex items-center flex-wrap gap-3'>
            {
              <span
                className='cursor-pointer'
                onClick={
                  type === 'login'
                    ? () => setType('signup')
                    : () => setType('login')
                }
              >
                {type === 'login'
                  ? 'Нет аккаунта? Зарегистрироваться'
                  : 'Есть аккаунт? Войти'}
              </span>
            }
            <Button
              name={type}
              loader={isSubmitting}
              type='submit'
              className='w-full sm:w-auto'
            >
              {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Authorization;
