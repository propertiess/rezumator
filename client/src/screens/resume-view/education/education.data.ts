import { InfoLi } from '@/screens/resume-view/header/header.data';
import { EducationState } from '@/types';

export const educationLi: InfoLi<EducationState>[] = [
  {
    title: 'Форма обучения:',
    option: 'form',
  },
  {
    title: 'Специальность:',
    option: 'specialty',
  },
  {
    title: 'Факультет:',
    option: 'faculty',
  },
  {
    title: 'Год окончания:',
    option: 'end',
  },
];
