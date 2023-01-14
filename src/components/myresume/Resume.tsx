import { forwardRef } from 'react';
import { Education } from '@/components/myresume/education';
import { Experience } from '@/components/myresume/experience';
import { Header } from '@/components/myresume/header/Header';
import { Optional } from '@/components/myresume/optional';
import styles from './Resume.module.css';

export const Resume = forwardRef<HTMLDivElement>(function Resume(_, ref) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content} ref={ref}>
        <Header />
        <Education />
        <Experience />
        <Optional />
      </div>
    </section>
  );
});
