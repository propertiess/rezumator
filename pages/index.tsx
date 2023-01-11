import type { NextPage } from 'next';
import { Hero } from '@/components/home/Hero';
import { Layout } from '@/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout
      title='Онлайн конструктор резюме'
      description='Сделать резюме быстро и легко по готовым шаблонам. Только 5% соискателей имеют качественное резюме - будь среди них и быстро найти хорошую работу.'
    >
      <Hero />
    </Layout>
  );
};

export default Home;
