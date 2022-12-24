import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AuthFields } from '@/components/common/auth-fields/AuthFields';
import { Button } from '@/components/common/ui/Button';
import { AuthContext } from '@/context/AuthContext';
import { useAuthForm } from '@/hooks/useAuthForm';
import { Layout } from '@/layout/Layout';
import { AuthService } from '@/services/auth/auth.service';
import { SimpleUser } from '@/services/auth/auth.types';
import styles from '@/styles/Auth.repeat.module.css';

const SignUp: NextPage = () => {
  const [error, setError] = useState('');
  const { register, errors, handleSubmit } = useAuthForm();

  const { setAuthToken } = useContext(AuthContext);
  const { push } = useRouter();

  const signUp: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    setError('');

    try {
      const user = await AuthService.createUser(username, password);
      if (user.id) {
        setAuthToken(user.id);
        push('/rezumator');
      } else {
        setError('Такой username уже существует!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout title='Signup' description='Signup'>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit(signUp)}>
          <AuthFields register={register} errors={errors} />
          {error && <span className={styles.error}>{error}</span>}
          <Button type='submit' className={styles.btn}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
