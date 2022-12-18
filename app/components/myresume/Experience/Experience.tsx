import { FC, HTMLAttributes } from 'react';
import { Li } from '@/components/myresume/common/Li';
import { SectionLayout } from '@/components/myresume/common/SectionLayout';
import { useAppSelector } from '@/store';
import repeatStyles from '../common/Repeat.module.css';
import styles from './Experience.module.css';

type Props = HTMLAttributes<unknown>;

export const Experience: FC<Props> = () => {
  const experienceInfo = useAppSelector(
    state => state.rezumator.experienceInfo
  );

  if (!experienceInfo.length) {
    return null;
  }

  return (
    <SectionLayout title='Опыт работы'>
      {experienceInfo.map((experience, i) => (
        // TODO need unique id
        <div className={repeatStyles.wrapper} key={i}>
          <div className={styles.col}>
            <h4 className={repeatStyles.subtitle}>{experience.organization}</h4>
            <ul>
              <Li title='Должность:' content={experience.profession} />
              {experience.duties && (
                <li className='break-all mt-2'>{experience.duties}</li>
              )}
            </ul>
          </div>
          <p>{experience.fullExperienceJob}</p>
        </div>
      ))}
    </SectionLayout>
  );
};
