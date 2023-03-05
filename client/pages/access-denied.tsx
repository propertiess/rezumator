import { Layout } from '@/layout';

const AccessDeniedPage = () => {
  return (
    <Layout title='Доступ запрещен'>
      <h3 className='text-center text-2xl mt-3'>
        Доступ к странице запрещен, попробуйте авторизироваться!
      </h3>
    </Layout>
  );
};

export default AccessDeniedPage;
