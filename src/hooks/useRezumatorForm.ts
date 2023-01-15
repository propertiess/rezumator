import { useRouter } from 'next/router';
import { useContext } from 'react';

import { useFetchFields } from './useFetchFields';
import { SubmitHandler, useForm } from 'react-hook-form';

import { getFullFields } from '@/components/myresume/utils/getFullFields';

import { useActions } from '@/store/hooks/useActions';

import { useAppSelector } from '@/store';
import { useSetFieldsByIdMutation } from '@/store/api/fields.api';
import { RezumatorState } from '@/store/slices/rezumator/rezumator.slice';

import { AuthContext } from '@/context/AuthContext';

export const useRezumatorForm = () => {
  const avatar = useAppSelector(
    state => state.rezumator.fields.aboutInfo.avatar
  );
  const { authToken } = useContext(AuthContext);
  const { setRezumator } = useActions();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful }
  } = useForm<{
    rezumator: RezumatorState;
  }>();

  const [updateFieldsById] = useSetFieldsByIdMutation({
    fixedCacheKey: 'cache'
  });

  useFetchFields(setValue);

  const onSubmit: SubmitHandler<{ rezumator: RezumatorState }> = async data => {
    const newRezumator = {
      ...data.rezumator,
      aboutInfo: {
        ...data.rezumator.aboutInfo,
        avatar
      }
    };

    const fullFields = getFullFields(newRezumator);

    if (authToken) {
      await updateFieldsById({
        fields: newRezumator,
        id: authToken
      });
      push('/myresume');
      return;
    }
    setRezumator(fullFields);

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
    onSubmit: handleSubmit(onSubmit)
  };
};
