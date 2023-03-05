import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { Hero } from '@/screens/home/hero';

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
