import { FC } from 'react';
import { Button } from '@/components/common/ui/Button';
import { About } from '@/components/rezumator/about';
import { Personal } from '@/components/rezumator/personal';
import { useRezumatorForm } from '@/hooks/useRezumatorForm';
import { Layout } from '@/layout/Layout';

export const RezumatorScreen: FC = () => {
  const { register, errors, onSubmit, isSubmitting } = useRezumatorForm();

  return (
    <Layout title='Составить резюме' description='Составить резюме'>
      <form className='px-5 sm:px-2' onSubmit={onSubmit}>
        <About register={register} errors={errors.rezumator?.aboutInfo} />
        <Personal register={register} errors={errors.rezumator?.personalInfo} />

        <Button
          className='flex mt-5 ml-auto'
          disabled={isSubmitting}
          type='submit'
        >
          Предпросмотр
        </Button>
      </form>
    </Layout>
  );
};
