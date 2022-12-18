import { FC, HTMLAttributes } from 'react';
import { Resume } from '@/components/myresume/Resume';
import { useRezumatorFromStorage } from '@/hooks/useRezumatorFromStorage';
import { Layout } from '@/layout/Layout';

type Props = HTMLAttributes<unknown>;

export const MyResumeScreen: FC<Props> = () => {
  useRezumatorFromStorage();

  return (
    <Layout title='Моё резюме' description='123'>
      <Resume />
    </Layout>
  );
};
