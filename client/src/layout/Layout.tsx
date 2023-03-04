import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

interface Props {
  title: string;
  description?: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({
  title,
  description,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <meta name='description' content={description} />
        ) : (
          <meta name='robots' content='noindex' />
        )}
      </Head>
      <Header />
      <main>
        <div className='my_container'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
