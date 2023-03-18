import { forwardRef, SelectHTMLAttributes } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from 'react-hook-form';
import clsx from 'clsx';

import styles from './Select.module.css';

export type SelectOptions = {
  label: string;
  value: string;
};

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  options?: SelectOptions[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { className, error, options, placeholder, ...rest },
  ref
) {
  const style = clsx(className, styles.wrapper, {
    [styles.error]: error,
  });

  return (
    <select defaultValue='' className={style} ref={ref} {...rest}>
      {placeholder && (
        <option disabled hidden value=''>
          {placeholder}
        </option>
      )}
      {options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
