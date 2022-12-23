import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Button } from '@/components/common/ui/Button';
import { Input } from '@/components/common/ui/Input';
import { AuthContext } from '@/context/AuthContext';
import { Layout } from '@/layout/Layout';
import { AuthService } from '@/services/auth/auth.service';

const Login: NextPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();
  const { setAuthToken } = useContext(AuthContext);

  const signUp = async () => {
    const user = await AuthService.createUser(username, password);
    setAuthToken(user.id);
    push('/');
  };

  const login = async () => {
    const user = await AuthService.login(username, password);
    if (user.id) {
      setAuthToken(user.id);
      push('/');
    }
  };

  return (
    <Layout title='Авторизация' description='Авторизация'>
      <div className='max-w-[500px] mx-auto mt-5'>
        <form className='flex flex-col justify-center items-center p-10 gap-10 rounded-lg border mx-auto'>
          <div className='flex flex-col gap-3'>
            <Input
              value={username}
              onChange={e => setUserName(e.target.value)}
              placeholder='username'
            />
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              placeholder='password'
            />
          </div>
          <div className='flex gap-3'>
            <Button onClick={login} className='flex-grow'>
              Войти
            </Button>
            <Button onClick={signUp}>Зарегистрироваться</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
