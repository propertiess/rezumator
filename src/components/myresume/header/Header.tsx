import Image from 'next/image';

import { Li } from '@/components/myresume/common/Li';
import {
  aboutInfoLi,
  personalInfoLi
} from '@/components/myresume/header/header.data';
import { AboutInfoState, PersonalInfoState } from '@/types';

import styles from './Header.module.css';

type Props = {
  aboutInfo: AboutInfoState;
  personalInfo: PersonalInfoState;
};

export const Header = ({ aboutInfo, personalInfo }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className='flex gap-10'>
        {aboutInfo?.avatar && (
          <Image
            className='rounded-full'
            src={aboutInfo.avatar}
            alt='avatar'
            width={120}
            height={120}
          />
        )}
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>
            <span>{aboutInfo?.secondName}</span>
            <span>
              {aboutInfo?.firstName} {aboutInfo?.thirdName}
            </span>
          </h2>
          <p className={styles.sub_title}>{aboutInfo?.profession}</p>
        </div>
      </div>
      <div className='basis-1/2'>
        <ul>
          {personalInfoLi.map(li => (
            <Li
              key={li.option}
              title={li.title}
              content={personalInfo ? personalInfo[li.option]! : ''}
            />
          ))}
          {aboutInfoLi.map(li => (
            <Li
              key={li.option}
              title={li.title}
              content={aboutInfo ? aboutInfo[li.option]! : ''}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
