import { useEffect, useRef } from 'react';
import {
  FieldValues,
  Path,
  UseFormGetValues,
  UseFormSetValue
} from 'react-hook-form';
import { useActions } from '@/store/hooks/useActions';

export const useSaveRezumatorToStorage = <T extends FieldValues>(
  state: T,
  action: UseFormSetValue<T>,
  getter: UseFormGetValues<T>
) => {
  const firstRender = useRef(true);
  const { setRezumator } = useActions();

  useEffect(() => {
    const data = sessionStorage.getItem('rezumator');
    if (firstRender.current && data) {
      setRezumator(JSON.parse(data));
      firstRender.current = false;
      action('rezumator' as Path<T>, JSON.parse(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sessionStorage.setItem('rezumator', JSON.stringify(getter().rezumator));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
};
