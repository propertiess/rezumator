import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useAuth, useFields } from '@/context';
import { getFullFields } from '@/screens/resume-view/utils/getFullFields';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

export type RezumatorFormValue = {
  'resume-edit': Fields;
};

export const ResumeEditFormEnum: Record<string, keyof RezumatorFormValue> = {
  RESUME_EDIT: 'resume-edit',
};

export const useResumeEditForm = (serverFields?: Fields) => {
  const { fields, setFields, setAvatar } = useFields();
  const avatar = fields?.aboutInfo?.avatar;
  const { authToken } = useAuth();

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<RezumatorFormValue>({
    defaultValues: {
      [ResumeEditFormEnum.RESUME_EDIT]: serverFields,
    },
  });

  useEffect(() => {
    if (authToken || serverFields) {
      return;
    }

    setValue(ResumeEditFormEnum.RESUME_EDIT, fields);
  }, [authToken, fields, setValue]);

  const onSubmit: SubmitHandler<RezumatorFormValue> = async data => {
    const newRezumator = {
      ...data[ResumeEditFormEnum.RESUME_EDIT],
      aboutInfo: {
        ...data[ResumeEditFormEnum.RESUME_EDIT].aboutInfo,
        avatar,
      },
    };

    const fullFields = getFullFields(newRezumator);

    if (authToken && serverFields) {
      try {
        await FieldsService.setById(authToken, serverFields._id, newRezumator);
      } catch (e) {
        console.log(e);
      }
    }
    setFields(fullFields);

    if (authToken && serverFields) {
      push(`/resume/view/${serverFields._id}`);
    } else {
      push(`/resume/view`);
    }
  };

  return {
    register,
    control,
    errors,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitSuccessful,
    getValues,
    onSubmit: handleSubmit(onSubmit),
    fields: serverFields ?? fields,
    setAvatar,
  };
};
