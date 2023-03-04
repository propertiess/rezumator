import { DescriptionList } from '@/components/common/description-list';
import { Divider } from '@/components/common/divider';
import { Li } from '@/components/myresume/common/Li';
import { optionalLi } from '@/components/myresume/optional/optional.data';
import { OptionalState } from '@/types';

import { SectionLayout } from '../common/section-layout';

import resStyles from '../Resume.module.css';

type Props = {
  optionalInfo: OptionalState;
};

export const Optional = ({ optionalInfo }: Props) => {
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
