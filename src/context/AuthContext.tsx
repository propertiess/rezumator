import { FC, PropsWithChildren, createContext } from 'react';

import {
  LocalStorageValue,
  useLocalStorageString
} from 'react-use-window-localstorage';

export type Auth = {
  authToken: LocalStorageValue<string>;
  setAuthToken: (id: string) => void;
};

export const AuthContext = createContext<Auth>({} as Auth);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, setToken] = useLocalStorageString('token', '');

  const setAuthToken = (id: string) => {
    setToken(id);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
