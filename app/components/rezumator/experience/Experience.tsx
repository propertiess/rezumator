import { FC, Fragment, useEffect } from 'react';
import classNames from 'classnames';
import { useFieldArray } from 'react-hook-form';
import { Label } from '@/components/common/Label';
import { Input } from '@/components/common/ui/Input';
import { Select } from '@/components/common/ui/Select';
import { TextArea } from '@/components/common/ui/TextArea';
import { useAppSelector } from '@/store';
import { ExperienceState } from '@/store/slices/rezumator';
import { initialExperience } from '@/store/slices/rezumator';
import { MONTHS, YEARS } from '@/utils/DateState.constant';
import styles from '../Repeat.module.css';
import { AddRemoveButtons } from '../common/AddRemoveButtons';
import { FormSectionLayout } from '../common/FormSectionLayout';
import { RezumatorPropsWithControl } from '../interfaces';

type Props = RezumatorPropsWithControl<ExperienceState>;

export const Experience: FC<Props> = ({ register, control }) => {
  const experience = useAppSelector(state => state.rezumator.experienceInfo);

  const {
    fields: experienceInfo,
    remove,
    insert,
    replace
  } = useFieldArray({ control, name: 'rezumator.experienceInfo' });

  // TODO: think about another way

  useEffect(() => {
    replace(experience);
  }, [experience, replace]);

  //
  return (
    <FormSectionLayout title='Опыт работы'>
      {experienceInfo.map((experience, index) => (
        <Fragment key={experience.id}>
          <div className={classNames(styles.col, styles.big_col)}>
            <Label label='Организация:'>
              <Input
                {...register(`rezumator.experienceInfo.${index}.organization`)}
              />
            </Label>

            <Label label='Период работы с:'>
              <span className='flex flex-grow gap-3'>
                <Select
                  className='basis-full'
                  placeholder='Месяц'
                  options={MONTHS}
                  {...register(
                    `rezumator.experienceInfo.${index}.startJob.month`
                  )}
                />
                <Select
                  className='basis-full'
                  placeholder='Год'
                  options={YEARS}
                  {...register(
                    `rezumator.experienceInfo.${index}.startJob.year`
                  )}
                />
              </span>
            </Label>
          </div>
          <div className={classNames(styles.col, styles.middle_col)}>
            <Label label='Должность:' className='order-2 lg:order-none'>
              <Input
                {...register(`rezumator.experienceInfo.${index}.profession`)}
              />
            </Label>
            <Label label='по:'>
              <span className='flex flex-grow gap-3'>
                <Select
                  className='basis-full'
                  placeholder='Месяц'
                  options={MONTHS}
                  {...register(
                    `rezumator.experienceInfo.${index}.endJob.month`
                  )}
                />
                <Select
                  className='basis-full'
                  placeholder='Год'
                  options={YEARS}
                  {...register(`rezumator.experienceInfo.${index}.endJob.year`)}
                />
              </span>
            </Label>
          </div>
          <Label className='basis-full' label='Должностные обязанности:'>
            <TextArea
              {...register(`rezumator.experienceInfo.${index}.duties`)}
            />
          </Label>
        </Fragment>
      ))}
      <AddRemoveButtons
        length={experienceInfo.length}
        insert={() => insert(experienceInfo.length, initialExperience)}
        remove={remove}
      />
    </FormSectionLayout>
  );
};
