import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '@/context/AuthContext';
import { AuthService } from '@/services/auth/auth.service';
import { RezumatorService } from '@/services/rezumator/rezumator';
import { useAppSelector } from '@/store';
import { RezumatorState } from '@/store/slices/rezumator/rezumator';
import { useFetchFields } from './useFetchFields';

export const useRezumatorForm = () => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const { authToken, setAuthToken } = useContext(AuthContext);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<{
    rezumator: RezumatorState;
  }>({ mode: 'onChange' });

  useFetchFields(setValue);

  const onSubmit: SubmitHandler<{ rezumator: RezumatorState }> = async data => {
    if (!isDirty && !isValid) {
      return;
    }

    if (authToken) {
      const newRezumator = {
        ...data.rezumator,
        aboutInfo: {
          ...data.rezumator.aboutInfo,
          avatar: fields && fields.aboutInfo.avatar
        }
      };

      try {
        await RezumatorService.setFields(authToken, newRezumator);
      } catch (e) {
        console.log(e);
      }
    }

    push('/myresume');
    // console.log('@ save', newRezumator);
  };

  return {
    register,
    control,
    errors,
    isDirty,
    isValid,
    isSubmitting,
    getValues,
    onSubmit: handleSubmit(onSubmit)
  };
};
