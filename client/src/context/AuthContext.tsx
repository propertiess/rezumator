import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';

import { AuthEnum } from '@/utils/consts';

export type Auth = {
  authToken: string;
  setAuthToken: (token: string) => void;
};

const AuthContext = createContext<Auth>({} as Auth);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, setToken] = useState('');

  const setAuthToken = (token: string) => {
    setToken(token);

    if (token === '') {
      Cookies.remove(AuthEnum.AUTH_TOKEN);
      return;
    }

    Cookies.set(AuthEnum.AUTH_TOKEN, token);
  };

  useEffect(() => {
    const token = Cookies.get(AuthEnum.AUTH_TOKEN);

    if (!token) {
      return;
    }

    setToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
