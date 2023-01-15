import { InfoLi } from '@/components/myresume/header/header.data';

import { OptionalState } from '@/store/slices/rezumator';

export const optionalLi: InfoLi<Omit<OptionalState, 'driveLicenses'>>[] = [
  {
    title: 'Иностранные языки:',
    option: 'languages'
  },
  {
    title: 'Есть медицинская книжка',
    option: 'medBook'
  }
];
