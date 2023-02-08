import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { getFullFields } from '@/components/myresume/utils/getFullFields';
import { useAuth, useFields } from '@/context';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

export const useRezumatorForm = () => {
  const { fields, setFields, setAvatar } = useFields();
  const avatar = fields.aboutInfo.avatar;
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
      await FieldsService.setById(authToken, newRezumator);
    }
    setFields(fullFields);

    push('/myresume');
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
