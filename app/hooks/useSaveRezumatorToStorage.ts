import { useEffect, useRef } from 'react';
import {
  FieldValues,
  Path,
  UseFormGetValues,
  UseFormSetValue
} from 'react-hook-form';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';

export const useSaveRezumatorToStorage = <T extends FieldValues>(
  state: T,
  action: UseFormSetValue<T>,
  getter: UseFormGetValues<T>
) => {
  const firstRender = useRef(true);
  const { setRezumator } = useActions();
  const avatar = useAppSelector(state => state.rezumator.aboutInfo.avatar);

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
    const rezumator = {
      ...getter().rezumator,
      aboutInfo: { ...getter().rezumator.aboutInfo, avatar }
    };
    sessionStorage.setItem('rezumator', JSON.stringify(rezumator));
    console.log('@ save', rezumator);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
};
