import { useEffect } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import { RezumatorService } from '@/services/rezumator/rezumator.service';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator';

const cache: Record<string, unknown> = {};

export const useFetchFields = <T extends FieldValues>(
  action?: UseFormSetValue<T>
) => {
  const { setRezumator } = useActions();
  const fields = useAppSelector(state => state.rezumator.fields);

  useEffect(() => {
    let mounted = true;
    const authToken = localStorage.getItem('token');

    const fetchFields = async () => {
      if (!authToken) {
        action && action('rezumator' as Path<T>, fields as any);
        return;
      }

      if (cache[authToken] && mounted) {
        action && action('rezumator' as Path<T>, fields as any);
        return;
      }

      let data: RezumatorState | null;

      try {
        data = await RezumatorService.getFields(authToken!);
        cache[authToken] = data;
        if (mounted) {
          setRezumator(data);
          action && action('rezumator' as Path<T>, data as any);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchFields();

    return () => {
      mounted = false;
    };
  }, []);
};
