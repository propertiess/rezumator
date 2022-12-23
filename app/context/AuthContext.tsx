import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react';

export type Auth = {
  authToken: string;
  setAuthToken: (id: string) => void;
};

export const AuthContext = createContext<Auth>({} as Auth);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      authToken && setAuthToken('');
      return;
    }

    !authToken && setAuthToken(token);
  }, [authToken]);

  const setAuthToken = (id: string) => {
    setToken(id);
    localStorage.setItem('token', id);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
