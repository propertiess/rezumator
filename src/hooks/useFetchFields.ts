import { useContext, useEffect } from 'react';

import { UseFormSetValue } from 'react-hook-form';

import { useActions } from '@/store/hooks/useActions';

import { useAppSelector } from '@/store';
import { RezumatorState } from '@/store/slices/rezumator';

import { AuthContext } from '@/context/AuthContext';

import { useGetCurrentFieldsFromApi } from '@/hooks/useGetCurrentFieldsFromApi';

export const useFetchFields = (
  action?: UseFormSetValue<{ rezumator: RezumatorState }>
) => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const { authToken } = useContext(AuthContext);
  const { data } = useGetCurrentFieldsFromApi();
  const { setRezumator } = useActions();

  useEffect(() => {
    if (!authToken) {
      action && action('rezumator', fields);
      return;
    }

    if (data && data.aboutInfo.firstName) {
      setRezumator(data);
      action && action('rezumator', data);
    }
  }, [data]);
};
