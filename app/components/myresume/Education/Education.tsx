import { FC, HTMLAttributes } from 'react';
import { educationLi } from '@/components/myresume/Education/education.data';
import { Li } from '@/components/myresume/Header';
import { SectionLayout } from '@/components/myresume/common/SectionLayout';
import { useAppSelector } from '@/store';
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
  );
};
