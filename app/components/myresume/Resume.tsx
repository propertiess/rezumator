import { forwardRef } from 'react';
import { Education } from '@/components/myresume/Education';
import { Experience } from '@/components/myresume/Experience';
import { Header } from '@/components/myresume/Header';
import { Optional } from '@/components/myresume/Optional';
import styles from './Resume.module.css';

export const Resume = forwardRef<HTMLElement>(function Resume(_, ref) {
  return (
    <section className={styles.wrapper} ref={ref}>
      <div className={styles.content}>
        <Header />
        <Education />
        <Experience />
        <Optional />
      </div>
    </section>
  );
});
