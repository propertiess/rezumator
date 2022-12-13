import { FC, SelectHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge
} from 'react-hook-form';
import styles from './Select.module.css';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: { label: string; value: string }[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
}

const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(function Select(
  { className, error, options, ...rest },
  ref
) {
  const style = classNames(className, {
    // [styles.wrapper]: type !== 'checkbox',
    [styles.wrapper]: true,
    [styles.error]: error
  });

  return (
    <select className={style} ref={ref} {...rest}>
      {options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export { Select };
