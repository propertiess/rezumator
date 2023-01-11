import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Label.module.css';

interface Props extends HTMLAttributes<unknown> {
  label: string;
  labelClassName?: string;
}

export const Label: FC<PropsWithChildren<Props>> = ({
  label,
  className,
  labelClassName,
  children
}) => {
  const style = classNames(styles.wrapper, className);
  const labelStyle = classNames(labelClassName, styles.label);
  return (
    <div className={style}>
      <label className={labelStyle}>{label}</label>
      {children}
    </div>
  );
};
