import { useState } from 'react';

export const useDisclosure = (value: boolean) => {
  const [isOpen, setIsOpen] = useState(value);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return [
    isOpen,
    {
      open,
      close,
      toggle,
    },
  ] as const;
};
