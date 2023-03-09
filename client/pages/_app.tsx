import { FC } from 'react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { AuthProvider } from '@/context';
import { FieldsProvider } from '@/context/FieldsContext';

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
