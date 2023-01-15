import { useContext } from 'react';

import { useAppSelector } from '@/store';
import { fieldsApi, useGetFieldsByIdQuery } from '@/store/api/fields.api';
import { RezumatorState } from '@/store/slices/rezumator';

import { AuthContext } from '@/context/AuthContext';

import { initialRezumator } from '@/utils/constants/initial_fields';

export const useGetCurrentFieldsFromApi = (): { data: RezumatorState } => {
  const { authToken } = useContext(AuthContext);
  const { data } = useGetFieldsByIdQuery(authToken);

  const mutation = useAppSelector(
    state => state[fieldsApi.reducerPath].mutations
  );

  if (mutation.cache) {
    return {
      data: mutation.cache.data as RezumatorState
    };
  }

  if (data) {
    return {
      data
    };
  }
  return { data: initialRezumator };
};
