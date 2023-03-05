import { Fragment, memo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import classNames from 'classnames';

import { Label } from '@/components/common/label';
import { Input } from '@/components/common/ui/input';
import { Select } from '@/components/common/ui/select';
import { TextArea } from '@/components/common/ui/text-area';
import { AddRemoveButtons } from '@/components/rezumator/common/add-remove-buttons';
import { FormSectionLayout } from '@/components/rezumator/common/form-section-layout';
import { initialExperience } from '@/context';
import { ExperienceState } from '@/types';
import { MONTHS, YEARS } from '@/utils/consts/full-date';

import { RezumatorPropsWithControl } from '../types';

import styles from '../Repeat.module.css';

type Props = RezumatorPropsWithControl<ExperienceState> & {
  experience: ExperienceState[];
};

export const Experience = memo(function Experience({
  register,
  control,
  experience,
}: Props) {
  const {
    fields: experienceInfo,
    remove,
    insert,
    replace,
  } = useFieldArray({ control, name: 'rezumator.experienceInfo' });

  // TODO: think about another way

  useEffect(() => {
    experience && replace(experience);
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
});
