import { NextPage } from 'next';
import { Layout } from '@/layout/Layout';

const About: NextPage = () => {
  return (
    <Layout title='О сервисе' description='Для чего нужен конструктор резюме'>
      <p className='mt-5'>
        Наша цель проста – сделать важнейший этап поиска работы простым,
        понятным и доступным. Ваше резюме – это первое, что видит потенциальный
        работодатель и мы знаем, что у вас не будет второго шанса произвести
        первое впечатление.
      </p>
    </Layout>
  );
};

export default About;
