import { FC, InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(function Input(
  { className, ...rest },
  ref
) {
  const style = classNames(styles.wrapper, className);

  return <input className={style} ref={ref} {...rest} />;
});

export { Input };
