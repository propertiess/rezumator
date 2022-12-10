import { FC } from 'react';
import { Layout } from '@/layout/Layout';
import styles from './HomeScreen.module.css';

export const HomeScreen: FC = ({ ...rest }) => {
  return (
    <Layout title='Главная' description='Конструктор резюме'>
      <div className={styles.wrapper} {...rest}>
        HomeScreen
      </div>
    </Layout>
  );
};
