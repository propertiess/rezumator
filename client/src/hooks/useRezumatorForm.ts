import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { getFullFields } from '@/components/myresume/utils/getFullFields';
import { useAuth, useFields } from '@/context';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

export const useRezumatorForm = (resumeId?: string) => {
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
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful }
  } = useForm<{
    rezumator: Fields;
  }>();

  useEffect(() => {
    if (!resumeId) {
      return;
    }

    const fetchFields = async () => {
      try {
        const data = await FieldsService.getById(resumeId!);
        setFields(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchFields();
  }, [resumeId]);

  useEffect(() => {
    setValue('rezumator', fields);
  }, [authToken, fields, setValue]);

  const onSubmit: SubmitHandler<{ rezumator: Fields }> = async data => {
    const newRezumator = {
      ...data.rezumator,
      aboutInfo: {
        ...data.rezumator.aboutInfo,
        avatar
      }
    };

    const fullFields = getFullFields(newRezumator);

    if (authToken) {
      try {
        await FieldsService.setById(authToken, fields._id, newRezumator);
      } catch (e) {
        console.log(e);
      }
    }
    setFields(fullFields);

    if (authToken) {
      push(`/resume/view/${fields._id}`);
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
    fields,
    setAvatar
  };
};
