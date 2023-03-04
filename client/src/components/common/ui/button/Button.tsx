import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { LoaderInButton } from '@/components/common/loader-in-button/LoaderInButton';
import { AVAILABLE_COLOR } from '@/utils/color';

import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: AVAILABLE_COLOR;
  className?: string;
  loader?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  color = AVAILABLE_COLOR.primary,
  className,
  children,
  type = 'button',
  loader = false,
  ...rest
}) => {
  const btnStyles = classNames(styles.wrapper, className, {
    [styles[color]]: color
  });

  return (
    <button className={btnStyles} type={type} {...rest}>
      <LoaderInButton condition={loader} text={children} />
    </button>
  );
};
