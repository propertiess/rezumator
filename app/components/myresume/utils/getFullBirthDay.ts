import { DateState } from '@/store/types';

export const getFullBirthDay = (birthDay: DateState) => {
  return `${birthDay.day}.${birthDay.month}.${birthDay.year} г.`;
};
