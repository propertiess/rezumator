import { useEffect, useRef } from 'react';

export const useClickOutside = (cb: () => void, trigger: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger) {
      return;
    }

    const onClickOutside = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (ref.current.contains(e.target as Node)) {
        return;
      }

      cb();
    };

    document.addEventListener('mousedown', onClickOutside);

    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [trigger]);

  return ref;
};
