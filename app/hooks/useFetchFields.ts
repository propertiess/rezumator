import { useContext, useEffect } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import { AuthContext } from '@/context/AuthContext';
import { useGetCurrentFieldsFromApi } from '@/hooks/useGetCurrentFieldsFromApi';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';

export const useFetchFields = <T extends FieldValues>(
  action?: UseFormSetValue<T>
) => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const { authToken } = useContext(AuthContext);
  const { data } = useGetCurrentFieldsFromApi();
  const { setRezumator } = useActions();

  useEffect(() => {
    if (!authToken) {
      action && action('rezumator' as Path<T>, fields as any);
      return;
    }

    if (data) {
      setRezumator(data);
      action && action('rezumator' as Path<T>, data as any);
    }
  }, [data]);
};
