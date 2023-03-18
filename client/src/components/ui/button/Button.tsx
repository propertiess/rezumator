import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Loader } from '@/components/loader';
import { AVAILABLE_COLOR } from '@/utils/color';

import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: AVAILABLE_COLOR;
  className?: string;
  loader?: boolean;
};

export const Button = ({
  color = AVAILABLE_COLOR.primary,
  className,
  children,
  type = 'button',
  loader = false,
  ...rest
}: Props) => {
  const btnStyles = clsx(styles.wrapper, className, {
    [styles[color]]: color,
  });

  return (
    <button className={btnStyles} type={type} {...rest}>
      {loader ? (
        <span className='flex items-center justify-center gap-2'>
          {loader && <Loader />}
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};
