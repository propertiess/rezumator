import { FC, HTMLAttributes } from 'react';
import styles from './FormSectionLayout.module.css';

interface Props extends HTMLAttributes<unknown> {
  title: string;
}

const FormSectionLayout: FC<Props> = ({ title, children, ...rest }) => {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <section className={styles.wrapper} {...rest}>
        {children}
      </section>
    </>
  );
};

export { FormSectionLayout };
