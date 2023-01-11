import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import { Li } from '@/components/myresume/common/Li';
import {
  aboutInfoLi,
  personalInfoLi
} from '@/components/myresume/header/header.data';
import { useAppSelector } from '@/store';
import styles from './Header.module.css';

type Props = HTMLAttributes<unknown>;

export const Header: FC<Props> = () => {
  const aboutInfo = useAppSelector(state => state.rezumator.fields?.aboutInfo);
  const personalInfo = useAppSelector(
    state => state.rezumator.fields?.personalInfo
  );

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
