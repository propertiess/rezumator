import {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister
} from 'react-hook-form';
import { RezumatorState } from '@/store/slices/rezumator';

export interface RezumatorProps<T extends FieldValues> {
  register: UseFormRegister<{
    rezumator: RezumatorState;
  }>;
  errors?: Merge<FieldError, FieldErrorsImpl<T>>;
}

export type RezumatorPropsWithControl<T extends FieldValues> =
  RezumatorProps<T> & {
    control: Control<
      {
        rezumator: RezumatorState;
      },
      unknown
    >;
  };
