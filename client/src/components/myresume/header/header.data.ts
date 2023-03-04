import { AboutInfoState, PersonalInfoState } from '@/types';

export type InfoLi<T> = {
  title: string;
  option: keyof T;
};

export const personalInfoLi: InfoLi<Omit<PersonalInfoState, 'birthDay'>>[] = [
  {
    title: 'Город:',
    option: 'city'
  },
  {
    title: 'Гражданство:',
    option: 'citizenShip'
  },
  {
    title: 'Дата рождения:',
    option: 'fullBirthDay'
  },
  {
    title: 'Переезд:',
    option: 'removal'
  }
];
export const aboutInfoLi: InfoLi<
  Omit<AboutInfoState, 'salary' | 'phoneNumber'>
>[] = [
  {
    title: 'Желаемая зарплата:',
    option: 'fullSalary'
  },
  {
    title: 'График работы:',
    option: 'scheduleOfWork'
  },
  {
    title: 'Готов к командировкам',
    option: 'readyForTravel'
  },
  {
    title: '',
    option: 'fullPhoneNumber'
  },
  {
    title: '',
    option: 'email'
  }
];
