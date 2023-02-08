import { FC, PropsWithChildren } from 'react';

import repeatStyles from '@/components/myresume/common/Repeat.module.css';

import styles from './SectionLayout.module.css';

interface Props extends PropsWithChildren {
  title: string;
}

export const SectionLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={repeatStyles.title}>{title}</h4>
      {children}
    </div>
  );
};
