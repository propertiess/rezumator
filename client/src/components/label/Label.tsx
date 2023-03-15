import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Label.module.css';

type Props = PropsWithChildren & {
  label: string;
  labelClassName?: string;
  className?: string;
};

export const Label = ({
  label,
  className,
  labelClassName,
  children,
}: Props) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={clsx(labelClassName, styles.label)}>{label}</label>
      {children}
    </div>
  );
};
