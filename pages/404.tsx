import { Layout } from '@/layout/Layout';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <Layout title='404' description='Страница не найдена!'>
      Пока странички нет
    </Layout>
  );
};

export default NotFound;
