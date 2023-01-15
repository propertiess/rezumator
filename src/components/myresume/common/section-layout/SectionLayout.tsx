import { FC, HTMLAttributes } from 'react';

import repeatStyles from '@/components/myresume/common/Repeat.module.css';

import styles from './SectionLayout.module.css';

interface Props extends HTMLAttributes<unknown> {
  title: string;
}

export const SectionLayout: FC<Props> = ({ title, children, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={repeatStyles.title}>{title}</h4>
      {children}
    </div>
  );
};
