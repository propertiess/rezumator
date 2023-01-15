import { FC, Fragment, HTMLAttributes } from 'react';

import { DescriptionList } from '@/components/common/description-list';
import { Divider } from '@/components/common/divider';
import { Li } from '@/components/myresume/common/Li';
import { SectionLayout } from '@/components/myresume/common/section-layout';

import { useAppSelector } from '@/store';

import resStyles from '../Resume.module.css';
import repeatStyles from '../common/Repeat.module.css';
import styles from './Experience.module.css';

type Props = HTMLAttributes<unknown>;

export const Experience: FC<Props> = () => {
  const experienceInfo = useAppSelector(
    state => state.rezumator.fields?.experienceInfo
  );

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
