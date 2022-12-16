export const formatPhoneNumber = (value: string) => {
  if (value[0] === '8' || !value) {
    return '';
  }

  const phoneNumber = value.replace(/\D/g, '');

  if (phoneNumber.length < 4) {
    return phoneNumber;
  }

  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`;
  }

  if (phoneNumber.length < 9) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 8)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
};
