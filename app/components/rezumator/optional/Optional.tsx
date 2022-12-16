import { FC, Fragment } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Label } from '@/components/common/Label';
import { LabelForCheckbox } from '@/components/common/LabelForCheckbox';
import { Input } from '@/components/common/ui/Input';
import { TextArea } from '@/components/common/ui/TextArea';
import { RezumatorPropsWithControl } from '@/components/rezumator/interfaces';
import { OptionalState } from '@/store/slices/rezumator';
import { FormSectionLayout } from '../common/FormSectionLayout';
import styles from './Optional.module.css';

type Props = RezumatorPropsWithControl<OptionalState>;

export const Optional: FC<Props> = ({ register, control }) => {
  const { fields: driveLicenses } = useFieldArray({
    control,
    name: 'rezumator.optionalInfo.driveLicenses'
  });

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
                {driveLicense.type}
                <Input
                  type='checkbox'
                  {...register(
                    `rezumator.optionalInfo.driveLicenses.${index}.exist`
                  )}
                />
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
