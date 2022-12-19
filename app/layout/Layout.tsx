import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

interface Props {
  title: string;
  description: string;
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
        <meta name='description' content={description} />
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
