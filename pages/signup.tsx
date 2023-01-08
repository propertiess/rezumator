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

const SignUp: NextPage = () => {
  const [error, setError] = useState('');
  const { register, errors, handleSubmit, isSubmitting } = useAuthForm();

  const { setAuthToken } = useContext(AuthContext);
  const { push } = useRouter();

  const signUp: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    error && setError('');

    try {
      const user = await AuthService.createUser(username, password);
      setAuthToken(user.id);
      push('/rezumator');
    } catch (e) {
      setError((e as any).response.data.message ?? 'error');
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
