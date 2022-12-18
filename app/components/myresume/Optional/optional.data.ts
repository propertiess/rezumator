import { InfoLi } from '@/components/myresume/Header';
import { OptionalState } from '@/store/slices/rezumator';

export const optionalLi: InfoLi<Omit<OptionalState, 'driveLicenses'>>[] = [
  {
    title: '',
    option: 'info'
  },
  {
    title: 'Иностранные языки:',
    option: 'languages'
  },
  {
    title: 'Есть медицинская книжка',
    option: 'medBook'
  }
];
