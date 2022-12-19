import { FC, HTMLAttributes } from 'react';
import { optionalLi } from '@/components/myresume/Optional/optional.data';
import { Li } from '@/components/myresume/common/Li';
import { SectionLayout } from '@/components/myresume/common/SectionLayout';
import { useAppSelector } from '@/store';
import styles from './Optional.module.css';

type Props = HTMLAttributes<unknown>;

export const Optional: FC<Props> = () => {
  const optionalInfo = useAppSelector(state => state.rezumator.optionalInfo);

  return (
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
      </ul>
    </SectionLayout>
  );
};
