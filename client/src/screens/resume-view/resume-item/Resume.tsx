import { forwardRef } from 'react';

import { Education } from '@/screens/resume-view/education';
import { Experience } from '@/screens/resume-view/experience';
import { Header } from '@/screens/resume-view/header/Header';
import { Optional } from '@/screens/resume-view/optional';
import { ResumeProps } from '@/types';

import styles from './Resume.module.css';

export const Resume = forwardRef<HTMLDivElement, ResumeProps>(function Resume(
  { fields },
  ref
) {
  if (!fields) {
    return null;
  }

  return (
    // <section className={styles.wrapper}>
    <div className={styles.content} ref={ref}>
      <Header aboutInfo={fields.aboutInfo} personalInfo={fields.personalInfo} />
      <Education educationInfo={fields.educationInfo} />
      <Experience experienceInfo={fields.experienceInfo} />
      <Optional optionalInfo={fields.optionalInfo} />
    </div>
    // </section>
  );
});
