import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, wrapper } from '@/store';
import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props.pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
