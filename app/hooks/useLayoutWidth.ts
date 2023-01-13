import { useEffect, useState } from 'react';

export const useLayoutWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(document.body.getBoundingClientRect().width);
  }, []);

  return width;
};
