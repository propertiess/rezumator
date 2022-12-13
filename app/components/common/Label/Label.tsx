import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Label.module.css';

interface Props extends HTMLAttributes<unknown> {
  label: string;
}

export const Label: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.span}>{label}</span>
      {children}
    </label>
  );
};
