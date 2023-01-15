import type { AppProps } from 'next/app';
import { FC } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/store';

import { AuthProvider } from '@/context';

import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
};

export default App;
