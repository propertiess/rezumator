import {
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
