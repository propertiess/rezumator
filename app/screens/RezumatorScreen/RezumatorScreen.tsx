import { FC } from 'react';
import { Button } from '@/components/common/ui/Button';
import { About } from '@/components/rezumator/about';
import { Education } from '@/components/rezumator/education';
import { Experience } from '@/components/rezumator/experience';
import { Optional } from '@/components/rezumator/optional';
import { Personal } from '@/components/rezumator/personal';
import { useRezumatorForm } from '@/hooks/useRezumatorForm';
import { Layout } from '@/layout/Layout';

export const RezumatorScreen: FC = () => {
  const { register, control, errors, onSubmit, isSubmitting } =
    useRezumatorForm();

  return (
    <Layout title='Составить резюме' description='Составить резюме'>
      <form className='px-5 sm:px-2' onSubmit={onSubmit}>
        <About register={register} errors={errors.rezumator?.aboutInfo} />
        <Personal register={register} errors={errors.rezumator?.personalInfo} />
        <Education
          register={register}
          errors={errors.rezumator?.educationInfo}
          control={control}
        />
        <Experience
          register={register}
          errors={errors.rezumator?.experienceInfo}
          control={control}
        />
        <Optional register={register} errors={errors.rezumator?.optionalInfo} control={control} />

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
