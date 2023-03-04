import { DateDto } from '../dto';

export const getFullBirthDay = (birthDay: DateDto) => {
  return `${birthDay.day}.${birthDay.month}.${birthDay.year} г.`;
};
