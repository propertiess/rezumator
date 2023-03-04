import { DateDto } from '../dto/date.dto';

export const getFullBirthDay = (birthDay: DateDto) => {
  return `${birthDay.day}.${birthDay.month}.${birthDay.year} г.`;
};
