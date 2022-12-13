import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { AVAILABLE_COLOR } from '@/utils/color';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: AVAILABLE_COLOR;
  className?: string;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  color = AVAILABLE_COLOR.primary,
  className,
  children,
  type = 'button',
  ...rest
}) => {
  const btnStyles = classNames(styles.wrapper, className, {
    [styles[color]]: color
  });

  return (
    <button className={btnStyles} type={type} {...rest}>
      {children}
    </button>
  );
};
