import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useGetFieldsByIdQuery } from '@/store/api/fields.api';

export const useGetFieldsFromApi = () => {
  const { authToken } = useContext(AuthContext);
  const { data } = useGetFieldsByIdQuery(authToken);

  return {
    data
  };
};
