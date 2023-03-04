import { NextPage } from 'next';

import { Layout } from '@/layout';

const NotFound: NextPage = () => {
  return (
    <Layout title='404' description='Страница не найдена!'>
      <h3 className='text-center mt-1'>Страница не найдена!</h3>
    </Layout>
  );
};

export default NotFound;
