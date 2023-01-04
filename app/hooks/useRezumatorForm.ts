import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getFullFields } from '@/components/myresume/utils/getFullFields';
import { AuthContext } from '@/context/AuthContext';
import { useAppSelector } from '@/store';
import { useSetFieldsByIdMutation } from '@/store/api/fields.api';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator/rezumator.slice';
import { useFetchFields } from './useFetchFields';

export const useRezumatorForm = () => {
  const fields = useAppSelector(state => state.rezumator.fields);
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

  const [updateFieldsById] = useSetFieldsByIdMutation();

  useFetchFields(setValue);

  const onSubmit: SubmitHandler<{ rezumator: RezumatorState }> = async data => {
    const newRezumator = {
      ...data.rezumator,
      aboutInfo: {
        ...data.rezumator.aboutInfo,
        avatar: fields && fields.aboutInfo.avatar
      }
    };

    const fullFields = getFullFields(newRezumator);
    setRezumator(fullFields);

    if (authToken) {
      await updateFieldsById({
        fields: newRezumator,
        id: authToken
      });
      push('/myresume');
      return;
    }

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
