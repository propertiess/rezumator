import { FC, Fragment, useEffect } from 'react';

import { RezumatorPropsWithControl } from '../types';
import { useFieldArray } from 'react-hook-form';

import { Label } from '@/components/common/label';
import { LabelForCheckbox } from '@/components/common/label-for-checkbox';
import { Input, TextArea } from '@/components/common/ui';
import { FormSectionLayout } from '@/components/rezumator/common/form-section-layout';

import { useAppSelector } from '@/store';
import { OptionalState } from '@/store/slices/rezumator';

import styles from './Optional.module.css';

type Props = RezumatorPropsWithControl<OptionalState>;

export const Optional: FC<Props> = ({ register, control }) => {
  const driveLicensesStore = useAppSelector(
    state => state.rezumator.fields?.optionalInfo.driveLicenses
  );
  const { fields: driveLicenses, replace } = useFieldArray({
    control,
    name: 'rezumator.optionalInfo.driveLicenses'
  });

  useEffect(() => {
    driveLicensesStore && replace(driveLicensesStore);
  }, [driveLicensesStore]);

  return (
    <FormSectionLayout title='Дополнительная информация'>
      <div className={styles.wrapper}>
        <Label label='Иностранные языки:'>
          <Input {...register('rezumator.optionalInfo.languages')} />
        </Label>
        <Label label='Водительские права:'>
          {driveLicenses.map((driveLicense, index) => (
            <Fragment key={driveLicense.id}>
              <label className='flex items-center gap-3'>
                <Input
                  type='checkbox'
                  {...register(
                    `rezumator.optionalInfo.driveLicenses.${index}.exist`
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
            {...register('rezumator.optionalInfo.medBook')}
          />
        </LabelForCheckbox>
        <Label label='Ссылки:'>
          <TextArea {...register('rezumator.optionalInfo.info')} />
        </Label>
      </div>
    </FormSectionLayout>
  );
};
