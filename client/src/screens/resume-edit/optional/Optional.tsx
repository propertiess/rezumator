import { FC, Fragment, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';

import { Label } from '@/components/label';
import { LabelForCheckbox } from '@/components/label-for-checkbox';
import { Input, TextArea } from '@/components/ui';
import { ResumeEditFormEnum } from '@/hooks';
import { FormSectionLayout } from '@/screens/resume-edit/common/form-section-layout';
import { DriveLicense, OptionalState } from '@/types';

import { RezumatorPropsWithControl } from '../types';

import styles from './Optional.module.css';

type Props = RezumatorPropsWithControl<OptionalState> & {
  driveLicense: DriveLicense[];
};

export const Optional: FC<Props> = ({ register, control, driveLicense }) => {
  const { fields: driveLicenses, replace } = useFieldArray({
    control,
    name: `${ResumeEditFormEnum.RESUME_EDIT}.optionalInfo.driveLicenses`,
  });

  useEffect(() => {
    driveLicense && replace(driveLicense);
  }, [driveLicense, replace]);

  return (
    <FormSectionLayout title='Дополнительная информация'>
      <div className={styles.wrapper}>
        <Label label='Иностранные языки:'>
          <Input
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.optionalInfo.languages`
            )}
          />
        </Label>
        <Label label='Водительские права:'>
          {driveLicenses.map((driveLicense, index) => (
            <Fragment key={driveLicense.id}>
              <label className='flex items-center gap-3'>
                <Input
                  type='checkbox'
                  {...register(
                    `${ResumeEditFormEnum.RESUME_EDIT}.optionalInfo.driveLicenses.${index}.exist`
                  )}
                />
                {driveLicense.type}
              </label>
            </Fragment>
          ))}
        </Label>
        <LabelForCheckbox label='Есть медицинская книжка:'>
          <Input
            type='checkbox'
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.optionalInfo.medBook`
            )}
          />
        </LabelForCheckbox>
        <Label label='Ссылки:'>
          <TextArea
            {...register(`${ResumeEditFormEnum.RESUME_EDIT}.optionalInfo.info`)}
          />
        </Label>
      </div>
    </FormSectionLayout>
  );
};
