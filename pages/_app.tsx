import type { AppProps } from 'next/app';
import { FC } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { wrapper } from '@/store';
import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default wrapper.withRedux(App);
