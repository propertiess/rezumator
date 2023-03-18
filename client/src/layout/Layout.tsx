import { PropsWithChildren } from 'react';
import Head from 'next/head';

import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

type Props = PropsWithChildren & {
  title: string;
  description?: string;
};

export const Layout = ({ title, description, children }: Props) => {
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
