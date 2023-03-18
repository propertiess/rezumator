import { PropsWithChildren } from 'react';

import repeatStyles from '@/screens/resume-view/common/Repeat.module.css';

import styles from './SectionLayout.module.css';

type Props = PropsWithChildren & {
  title: string;
};

export const SectionLayout = ({ title, children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={repeatStyles.title}>{title}</h4>
      {children}
    </div>
  );
};
