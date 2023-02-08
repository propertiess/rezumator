import { InfoLi } from '@/components/myresume/header/header.data';
import { EducationState } from '@/types';

export const educationLi: InfoLi<EducationState>[] = [
  {
    title: 'Форма обучения:',
    option: 'form'
  },
  {
    title: 'Специальность:',
    option: 'specialty'
  },
  {
    title: 'Факультет:',
    option: 'faculty'
  },
  {
    title: 'Год окончания:',
    option: 'end'
  }
];
