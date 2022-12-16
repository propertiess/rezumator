export const formatSalary = (value: string) => {
  if (value[0] === '0' || !value) {
    return '';
  }

  return value.replace(/\D/g, '');
};
