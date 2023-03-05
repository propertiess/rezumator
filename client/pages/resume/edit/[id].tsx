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
import { FieldsService } from '@/services/fields';
import { UserService } from '@/services/user/user.service';
import { Fields } from '@/types';
import { AuthEnum } from '@/utils/consts';

type Props = {
  fields: Fields;
};

const ResumeEditById = ({ fields }: Props) => {
  const {
    register,
    control,
    errors,
    onSubmit,
    isSubmitting,
    isSubmitSuccessful,
    setAvatar,
  } = useRezumatorForm(fields._id);

  return (
    <Layout title='Составить резюме' description='Составить резюме'>
      <form onSubmit={onSubmit}>
        <About
          register={register}
          errors={errors.rezumator?.aboutInfo}
          avatar={fields?.aboutInfo?.avatar ?? ''}
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
          driveLicense={fields.optionalInfo?.driveLicenses}
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

export default ResumeEditById;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id;
  const token = ctx.req.cookies[AuthEnum.AUTH_TOKEN];

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: '/access-denied',
      },
    };
  }

  const user = await UserService.getById(token);

  if (user.fields._id !== id) {
    return {
      props: {},
      redirect: {
        destination: '/access-denied',
      },
    };
  }

  try {
    const fields = await FieldsService.getById(id! as string);
    return {
      props: {
        fields,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
