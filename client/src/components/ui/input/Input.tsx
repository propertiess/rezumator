import { forwardRef, InputHTMLAttributes } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from 'react-hook-form';
import clsx from 'clsx';

import styles from './Input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, error, type, ...rest },
  ref
) {
  const style = clsx(className, {
    [styles.wrapper]: type !== 'checkbox',
    [styles.error]: error,
  });

  if (type === 'file') {
    return (
      <>
        <input type={type} hidden />
        <input />
      </>
    );
  }

  return <input className={style} ref={ref} type={type} {...rest} />;
});
