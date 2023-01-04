import { useContext, useEffect } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import { AuthContext } from '@/context/AuthContext';
import { useGetFieldsFromApi } from '@/hooks/useGetFieldsFromApi';
import { useAppSelector } from '@/store';
import { fieldsApi } from '@/store/api/fields.api';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator';

export const useFetchFields = <T extends FieldValues>(
  action?: UseFormSetValue<T>
) => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const mutation = useAppSelector(
    state => state[fieldsApi.reducerPath].mutations
  );
  const { authToken } = useContext(AuthContext);
  const { data } = useGetFieldsFromApi();
  const { setRezumator } = useActions();

  useEffect(() => {
    if (!authToken) {
      action && action('rezumator' as Path<T>, fields as any);
      return;
    }

    if (data) {
      if (mutation.cache) {
        setRezumator(mutation.cache.data as RezumatorState);
        action && action('rezumator' as Path<T>, mutation.cache.data as any);

        return;
      }
      setRezumator(data);
      action && action('rezumator' as Path<T>, data as any);
    }
  }, [data]);
};
