import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './LabelForCheckbox.module.css';

interface Props extends HTMLAttributes<unknown> {
  label: string;
  spanClassName?: string;
}

export const LabelForCheckbox: FC<Props> = ({
  label,
  className,
  spanClassName,
  children
}) => {
  const style = classNames(styles.wrapper, className);
  return (
    <label className={style}>
      <span className={spanClassName}>{label}</span>
      {children}
    </label>
  );
};
