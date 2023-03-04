import { forwardRef } from 'react';

import { Education } from '@/components/myresume/education';
import { Experience } from '@/components/myresume/experience';
import { Header } from '@/components/myresume/header/Header';
import { Optional } from '@/components/myresume/optional';
import { useFields } from '@/context';

import styles from './Resume.module.css';

export const Resume = forwardRef<HTMLDivElement>(function Resume(_, ref) {
  const { fields } = useFields();

  return (
    <section className={styles.wrapper}>
      <div className={styles.content} ref={ref}>
        <Header
          aboutInfo={fields.aboutInfo}
          personalInfo={fields.personalInfo}
        />
        <Education educationInfo={fields.educationInfo} />
        <Experience experienceInfo={fields.experienceInfo} />
        <Optional optionalInfo={fields.optionalInfo} />
      </div>
    </section>
  );
});
