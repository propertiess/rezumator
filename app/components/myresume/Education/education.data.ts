import { InfoLi } from '@/components/myresume/Header';
import { EducationState } from '@/store/slices/rezumator';

export const educationLi: InfoLi<EducationState>[] = [
  {
    title: 'Форма:',
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
