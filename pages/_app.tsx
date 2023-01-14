import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from '@/context/AuthContext';
import { store } from '@/store';
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
