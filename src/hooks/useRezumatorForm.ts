import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { getFullFields } from '@/components/myresume/utils/getFullFields';
import { useAuth, useFields } from '@/context';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

import { useFetchFields } from './useFetchFields';

export const useRezumatorForm = () => {
  // const avatar = useAppSelector(
  //   state => state.rezumator.fields.aboutInfo.avatar
  // );
  const { fields, setFields, setAvatar } = useFields();
  const avatar = fields.aboutInfo.avatar;
  const { authToken } = useAuth();

  // const { setRezumator } = useActions();
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

  // const [updateFieldsById] = useSetFieldsByIdMutation({
  //   fixedCacheKey: 'cache'
  // });

  useFetchFields(setValue);

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
      // await updateFieldsById({
      //   fields: newRezumator,
      //   id: authToken
      // });
      push('/myresume');
      return;
    }
    setFields(fullFields);
    // setRezumator(fullFields);

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
    setFields,
    setAvatar
  };
};
