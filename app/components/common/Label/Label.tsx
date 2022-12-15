import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Label.module.css';

interface Props extends HTMLAttributes<unknown> {
  label: string;
}

export const Label: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      {children}
    </div>
  );
};
