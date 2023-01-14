import { FC, HTMLAttributes } from 'react';
import { DescriptionList } from '@/components/common/description-list/DescriptionList';
import { Divider } from '@/components/common/divider';
import { Li } from '@/components/myresume/common/Li';
import { optionalLi } from '@/components/myresume/optional/optional.data';
import { useAppSelector } from '@/store';
import resStyles from '../Resume.module.css';
import { SectionLayout } from '../common/section-layout';

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
          <DescriptionList data={optionalInfo.info} />
        </ul>
      </SectionLayout>
    </>
  );
};
