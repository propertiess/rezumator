import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { useAuth, useFields } from '@/context';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

export const useFetchFields = (
  action?: UseFormSetValue<{ rezumator: Fields }>
) => {
  const { fields, setFields } = useFields();
  const { authToken } = useAuth();
  // const fields = useAppSelector(state => state.rezumator.fields);
  // const { data } = useGetCurrentFieldsFromApi();
  // const { setRezumator } = useActions();

  useEffect(() => {
    if (!authToken) {
      action && action('rezumator', fields);
      return;
    }

    const fetchFields = async () => {
      const data = await FieldsService.getById(authToken);
      if (data && data.aboutInfo.firstName) {
        setFields(data);
        action && action('rezumator', data);
      }
    };

    fetchFields();

    // if (data && data.aboutInfo.firstName) {
    //   setRezumator(data);
    //   action && action('rezumator', data);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
