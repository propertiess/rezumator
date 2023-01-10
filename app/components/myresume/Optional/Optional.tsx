import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Divider } from '@/components/common/Divider';
import { optionalLi } from '@/components/myresume/Optional/optional.data';
import { Li } from '@/components/myresume/common/Li';
import { SectionLayout } from '@/components/myresume/common/SectionLayout';
import { useAppSelector } from '@/store';
import resStyles from '../Resume.module.css';
import styles from './Optional.module.css';

type Props = HTMLAttributes<unknown>;

export const Optional: FC<Props> = () => {
  const optionalInfo = useAppSelector(
    state => state.rezumator.fields?.optionalInfo
  );

  if (!optionalInfo) {
    return null;
  }

  return (
    <>
      <Divider className={resStyles.divider} />
      <SectionLayout title='Дополнительная информация'>
        <ul>
          <Li
            title='Водительские права:'
            content={optionalInfo.driveLicenses
              .map(el => {
                if (!el.exist) {
                  return '';
                }
                return el.type;
              })
              .join(' ')
              .trim()}
          />

          {optionalLi.map(li => (
            <Li
              key={li.option}
              title={li.title}
              content={optionalInfo[li.option]}
            />
          ))}
          {optionalInfo.info.split('\n').map((line, idx) => {
            // array won't change in the resume page
            if (!line) {
              return <span key={idx} className='my-2 block'></span>;
            }

            return (
              <li key={line} className={classNames({ 'mt-2': idx === 0 })}>
                {line}
              </li>
            );
          })}
        </ul>
      </SectionLayout>
    </>
  );
};
