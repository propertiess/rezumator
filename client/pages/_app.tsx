import { FC } from 'react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { FieldsProvider } from '@/context/FieldsContext';
import { AuthProvider } from '@/store/auth/AuthProvider';

import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <FieldsProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </FieldsProvider>
    </AuthProvider>
  );
};

export default App;
