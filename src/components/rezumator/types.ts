import {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister
} from 'react-hook-form';

import { Fields } from '@/types';

export interface RezumatorProps<T extends FieldValues> {
  register: UseFormRegister<{
    rezumator: Fields;
  }>;
  errors?: Merge<FieldError, FieldErrorsImpl<T>>;
}

export type RezumatorPropsWithControl<T extends FieldValues> =
  RezumatorProps<T> & {
    control: Control<
      {
        rezumator: Fields;
      },
      unknown
    >;
  };
