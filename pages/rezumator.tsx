import { NextPage } from 'next';

import { Button } from '@/components/common/ui';
import {
  About,
  Education,
  Experience,
  Optional,
  Personal
} from '@/components/rezumator';
import { useRezumatorForm } from '@/hooks';
import { Layout } from '@/layout';

const Rezumator: NextPage = () => {
  const {
    register,
    control,
    errors,
    onSubmit,
    isSubmitting,
    isSubmitSuccessful
  } = useRezumatorForm();

  return (
    <Layout title='Составить резюме' description='Составить резюме'>
      <form onSubmit={onSubmit}>
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
        <Optional
          register={register}
          errors={errors.rezumator?.optionalInfo}
          control={control}
        />

        {!isSubmitSuccessful ? (
          <Button
            className='mt-5 ml-auto flex'
            disabled={isSubmitting}
            type='submit'
            loader={isSubmitting}
          >
            Предпросмотр
          </Button>
        ) : (
          <span className='mt-5 flex justify-end'>Переходим к шаблону...</span>
        )}
      </form>
    </Layout>
  );
};

export default Rezumator;
