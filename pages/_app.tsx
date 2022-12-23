import type { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '@/store';
import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
