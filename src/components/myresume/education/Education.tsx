import { FC, HTMLAttributes } from 'react';

import { Divider } from '@/components/common/divider';
import { Li } from '@/components/myresume/common/Li';
import { SectionLayout } from '@/components/myresume/common/section-layout';
import { educationLi } from '@/components/myresume/education/education.data';

import { useAppSelector } from '@/store';

import resStyles from '../Resume.module.css';
import repeatStyles from '../common/Repeat.module.css';

type Props = HTMLAttributes<unknown>;

export const Education: FC<Props> = () => {
  const educationInfo = useAppSelector(
    state => state.rezumator.fields?.educationInfo
  );

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
