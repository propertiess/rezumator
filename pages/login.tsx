import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AuthForm } from '@/components/common/auth-form/AuthForm';
import { AuthContext } from '@/context/AuthContext';
import { useAuthForm } from '@/hooks/useAuthForm';
import { Layout } from '@/layout/Layout';
import { AuthService } from '@/services/auth/auth.service';
import { SimpleUser } from '@/services/auth/auth.types';
import { useActions } from '@/store/hooks/useActions';

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
      setAuthToken(user.id);
      setRezumator(user.fields);
      push('/rezumator');
    } catch (e) {
      setError((e as any).response.data.message ?? 'error');
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
