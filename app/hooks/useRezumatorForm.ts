import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator/rezumator';
import { useRezumatorFromStorage } from './useRezumatorFromStorage';

export const useRezumatorForm = () => {
  const rezumator = useAppSelector(state => state.rezumator);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isDirty, isValid }
  } = useForm<{
    rezumator: RezumatorState;
  }>({ mode: 'onChange', defaultValues: { rezumator } });

  const { setRezumator } = useActions();
  useRezumatorFromStorage(setValue);

  const onSubmit: SubmitHandler<{ rezumator: RezumatorState }> = data => {
    if (!isDirty && !isValid) {
      return;
    }

    const newRezumator = {
      ...data.rezumator,
      aboutInfo: {
        ...data.rezumator.aboutInfo,
        avatar: rezumator.aboutInfo.avatar
      }
    };

    sessionStorage.setItem('rezumator', JSON.stringify(newRezumator));
    console.log('@ save', rezumator);

    setRezumator(newRezumator);
  };

  return {
    register,
    errors,
    isDirty,
    isValid,
    onSubmit: handleSubmit(onSubmit)
  };
};
