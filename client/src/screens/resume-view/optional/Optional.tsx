import { DescriptionList } from '@/components/description-list';
import { Divider } from '@/components/divider';
import { Li } from '@/screens/resume-view/common/Li';
import { optionalLi } from '@/screens/resume-view/optional/optional.data';
import { OptionalState } from '@/types';

import { SectionLayout } from '../common/section-layout';

import resStyles from '../resume-item/Resume.module.css';

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
