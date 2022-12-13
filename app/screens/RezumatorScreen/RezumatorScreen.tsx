import { FC } from 'react';
import { Button } from '@/components/common/ui/Button';
import { About } from '@/components/rezumator/About';
import { useRezumatorForm } from '@/hooks/useRezumatorForm';
import { Layout } from '@/layout/Layout';

export const RezumatorScreen: FC = () => {
  const { register, errors, onSubmit } = useRezumatorForm();

  return (
    <Layout title='Составить резюме' description='Составить резюме'>
      <form className='px-2' onSubmit={onSubmit}>
        <About register={register} errors={errors.rezumator?.aboutInfo} />

        <Button
          disabled={errors.rezumator?.message ? true : false}
          className='mt-5 text-center'
          type='submit'
        >
          Предпросмотр
        </Button>
      </form>
    </Layout>
  );
};
