import { Divider } from '@/components/divider';
import { Li } from '@/screens/resume-view/common/Li';
import { SectionLayout } from '@/screens/resume-view/common/section-layout';
import { educationLi } from '@/screens/resume-view/education/education.data';
import { EducationState } from '@/types';

import repeatStyles from '../common/Repeat.module.css';
import resStyles from '../resume-item/Resume.module.css';

type Props = {
  educationInfo: EducationState[];
};

export const Education = ({ educationInfo }: Props) => {
  if (!educationInfo?.length) {
    return null;
  }

  return (
    <>
      <Divider className={resStyles.divider} />
      <SectionLayout title='Образование'>
        {educationInfo.map((education, i) => (
          // TODO need unique id
          <div className={repeatStyles.wrapper} key={i}>
            <div className='basis-full'>
              <h4 className={repeatStyles.subtitle}>{education.institute}</h4>
              <ul>
                {educationLi.map(li => (
                  <Li
                    key={li.title}
                    title={li.title}
                    content={education[li.option]!}
                  />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </SectionLayout>
    </>
  );
};
