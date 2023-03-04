import { useEffect, useState } from 'react';

export const useLayoutWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth || 0);
  }, []);

  return width;
};
