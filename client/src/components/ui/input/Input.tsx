import { FC, forwardRef, InputHTMLAttributes } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge
} from 'react-hook-form';
import classNames from 'classnames';

import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(function Input(
  { className, error, type, ...rest },
  ref
) {
  const style = classNames(className, {
    [styles.wrapper]: type !== 'checkbox',
    [styles.error]: error
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

export { Input };
