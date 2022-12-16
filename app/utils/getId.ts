export const getId = (initial: number) => {
  return () => {
    return initial++;
  };
};
