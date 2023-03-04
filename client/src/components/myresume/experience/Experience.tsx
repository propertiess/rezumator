import { Fragment } from 'react';

import { DescriptionList } from '@/components/common/description-list';
import { Divider } from '@/components/common/divider';
import { Li } from '@/components/myresume/common/Li';
import { SectionLayout } from '@/components/myresume/common/section-layout';
import { ExperienceState } from '@/types';

import repeatStyles from '../common/Repeat.module.css';
import resStyles from '../Resume.module.css';
import styles from './Experience.module.css';

type Props = {
  experienceInfo: ExperienceState[];
};

export const Experience = ({ experienceInfo }: Props) => {
  if (!experienceInfo?.length) {
    return null;
  }

  return (
    <>
      <Divider className={resStyles.divider} />
      <SectionLayout title='Опыт работы'>
        {experienceInfo.map((experience, i) => (
          // TODO need unique id
          <Fragment key={i}>
            <div className={repeatStyles.wrapper}>
              <div className={styles.col}>
                <h4 className={repeatStyles.subtitle}>
                  {experience.organization}
                </h4>
                <ul>
                  <Li title='Должность:' content={experience.profession} />
                  <Li title='' content={experience.fullExperienceJob} />
                </ul>
              </div>
            </div>
            {experience.duties && (
              <ul>
                <DescriptionList data={experience.duties} />
              </ul>
            )}
          </Fragment>
        ))}
      </SectionLayout>
    </>
  );
};
