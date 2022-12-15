import { FC, SelectHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge
} from 'react-hook-form';
import styles from './Select.module.css';

export interface SelectOptions {
  label: string;
  value: string;
}
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: SelectOptions[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  placeholder?: string;
}

const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(function Select(
  { className, error, options, placeholder, ...rest },
  ref
) {
  const style = classNames(className, styles.wrapper, {
    [styles.error]: error
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

export { Select };
