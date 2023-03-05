import { GetServerSideProps } from 'next';

import { Button } from '@/components/common/ui';
import {
  About,
  Education,
  Experience,
  Optional,
  Personal,
} from '@/components/rezumator';
import { useRezumatorForm } from '@/hooks';
import { Layout } from '@/layout';
import { UserService } from '@/services/user/user.service';
import { AuthEnum } from '@/utils/consts';

const ResumeEdit = () => {
  const {
    register,
    control,
    errors,
    onSubmit,
    isSubmitting,
    isSubmitSuccessful,
    fields,
    setAvatar,
  } = useRezumatorForm();

  return (
    <Layout title='Составить резюме'>
      <form onSubmit={onSubmit}>
        <About
          register={register}
          errors={errors.rezumator?.aboutInfo}
          avatar={fields.aboutInfo.avatar ?? ''}
          setAvatar={setAvatar}
        />
        <Personal register={register} errors={errors.rezumator?.personalInfo} />
        <Education
          register={register}
          errors={errors.rezumator?.educationInfo}
          control={control}
          education={fields.educationInfo}
        />
        <Experience
          register={register}
          errors={errors.rezumator?.experienceInfo}
          control={control}
          experience={fields.experienceInfo}
        />
        <Optional
          register={register}
          errors={errors.rezumator?.optionalInfo}
          control={control}
          driveLicense={fields.optionalInfo.driveLicenses}
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

export default ResumeEdit;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const token = ctx.req.cookies[AuthEnum.AUTH_TOKEN];

  if (!token) {
    return {
      props: {},
    };
  }

  try {
    const user = await UserService.getById(token);
    return {
      props: {},
      redirect: {
        destination: `/resume/edit/${user.fields._id}`,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {},
  };
};
