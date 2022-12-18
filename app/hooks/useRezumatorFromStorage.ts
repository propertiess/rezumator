import { useEffect, useRef } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import { useActions } from '@/store/hooks/useActions';

export const useRezumatorFromStorage = <T extends FieldValues>(
  action?: UseFormSetValue<T>
) => {
  const firstRender = useRef(true);
  const { setRezumator } = useActions();

  useEffect(() => {
    const data = sessionStorage.getItem('rezumator');
    if (firstRender.current && data) {
      setRezumator(JSON.parse(data));
      firstRender.current = false;
      action && action('rezumator' as Path<T>, JSON.parse(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
