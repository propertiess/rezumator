import { HTMLAttributes } from 'react';

import styles from './FormSectionLayout.module.css';

type Props = HTMLAttributes<unknown> & {
  title: string;
};

export const FormSectionLayout = ({ title, children, ...rest }: Props) => {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <section className={styles.wrapper} {...rest}>
        {children}
      </section>
    </>
  );
};
