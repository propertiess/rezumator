import { Button } from '@/components/ui';
import { ResumeEditFormEnum, useResumeEditForm } from '@/hooks';
import { Layout } from '@/layout';
import { About } from '@/screens/resume-edit/about';
import { Education } from '@/screens/resume-edit/education';
import { Experience } from '@/screens/resume-edit/experience';
import { Optional } from '@/screens/resume-edit/optional';
import { Personal } from '@/screens/resume-edit/personal';
import { ResumeProps } from '@/types';

export const ResumeEditScreen = ({ fields: serverFields }: ResumeProps) => {
  const {
    register,
    control,
    errors,
    onSubmit,
    isSubmitting,
    isSubmitSuccessful,
    fields,
    setAvatar,
  } = useResumeEditForm(serverFields);

  return (
    <Layout title='Составить резюме'>
      <form onSubmit={onSubmit}>
        <About
          register={register}
          errors={errors[ResumeEditFormEnum.RESUME_EDIT]?.aboutInfo}
          avatar={fields.aboutInfo.avatar ?? ''}
          setAvatar={setAvatar}
        />
        <Personal
          register={register}
          errors={errors[ResumeEditFormEnum.RESUME_EDIT]?.personalInfo}
        />
        <Education
          register={register}
          errors={errors[ResumeEditFormEnum.RESUME_EDIT]?.educationInfo}
          control={control}
          education={fields.educationInfo}
        />
        <Experience
          register={register}
          errors={errors[ResumeEditFormEnum.RESUME_EDIT]?.experienceInfo}
          control={control}
          experience={fields.experienceInfo}
        />
        <Optional
          register={register}
          errors={errors[ResumeEditFormEnum.RESUME_EDIT]?.optionalInfo}
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
