import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.png'/>
      </Head>
      <body>
        <Main />
        <div id='portal' />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;