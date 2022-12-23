import { useEffect } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import { RezumatorService } from '@/services/rezumator/rezumator';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator';

export const useFetchFields = <T extends FieldValues>(
  action?: UseFormSetValue<T>
) => {
  const { setRezumator } = useActions();

  useEffect(() => {
    (async () => {
      let data: RezumatorState | null;

      try {
        data = await RezumatorService.getFields();
      } catch (e) {
        return;
      }

      if (!data) {
        return;
      }

      setRezumator(data);
      action && action('rezumator' as Path<T>, data as any);
    })();
  }, []);
};
