import { useEffect } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import { RezumatorService } from '@/services/rezumator/rezumator';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator';

export const useFetchFields = <T extends FieldValues>(
  action?: UseFormSetValue<T>
) => {
  const { setRezumator } = useActions();
  const fields = useAppSelector(state => state.rezumator.fields);

  useEffect(() => {
    (async () => {
      let data: RezumatorState | null;
      const authToken = localStorage.getItem('token');

      if (authToken) {
        try {
          data = await RezumatorService.getFields(authToken);
          setRezumator(data);
          action && action('rezumator' as Path<T>, data as any);
        } catch (e) {
          console.log(e);
        }
        return;
      }
      if (!fields) {
        try {
          data = await RezumatorService.getInitialFields();
          setRezumator(data);
          action && action('rezumator' as Path<T>, data as any);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, []);
};
