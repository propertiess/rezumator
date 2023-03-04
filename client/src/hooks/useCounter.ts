import { useState } from 'react';

export const useCounter = (initial: number) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    setCounter(prev => prev + 1);
  };
  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  return {
    counter,
    increment,
    decrement
  };
};
