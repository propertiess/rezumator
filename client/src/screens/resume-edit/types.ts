import {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

import { RezumatorFormValue } from '@/hooks';

export interface RezumatorProps<T extends FieldValues> {
  register: UseFormRegister<RezumatorFormValue>;
  errors?: Merge<FieldError, FieldErrorsImpl<T>>;
}

export type RezumatorPropsWithControl<T extends FieldValues> =
  RezumatorProps<T> & {
    control: Control<RezumatorFormValue, unknown>;
  };
