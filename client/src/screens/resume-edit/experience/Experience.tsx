import { Fragment, memo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import classNames from 'classnames';

import { Label } from '@/components/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { TextArea } from '@/components/ui/text-area';
import { initialExperience } from '@/context';
import { ResumeEditFormEnum } from '@/hooks';
import { AddRemoveButtons } from '@/screens/resume-edit/common/add-remove-buttons';
import { FormSectionLayout } from '@/screens/resume-edit/common/form-section-layout';
import { ExperienceState } from '@/types';
import { MONTHS, YEARS } from '@/utils/consts/full-date';

import { RezumatorPropsWithControl } from '../types';

import styles from '../common/Repeat.module.css';

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
  } = useFieldArray({
    control,
    name: `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo`,
  });

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
                {...register(
                  `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.organization`
                )}
              />
            </Label>

            <Label label='Период работы с:'>
              <span className='flex flex-grow gap-3'>
                <Select
                  className='basis-full'
                  placeholder='Месяц'
                  options={MONTHS}
                  {...register(
                    `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.startJob.month`
                  )}
                />
                <Select
                  className='basis-full'
                  placeholder='Год'
                  options={YEARS}
                  {...register(
                    `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.startJob.year`
                  )}
                />
              </span>
            </Label>
          </div>
          <div className={classNames(styles.col, styles.middle_col)}>
            <Label label='Должность:' className='order-2 lg:order-none'>
              <Input
                {...register(
                  `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.profession`
                )}
              />
            </Label>
            <Label label='по:'>
              <span className='flex flex-grow gap-3'>
                <Select
                  className='basis-full'
                  placeholder='Месяц'
                  options={MONTHS}
                  {...register(
                    `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.endJob.month`
                  )}
                />
                <Select
                  className='basis-full'
                  placeholder='Год'
                  options={YEARS}
                  {...register(
                    `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.endJob.year`
                  )}
                />
              </span>
            </Label>
          </div>
          <Label className='basis-full' label='Должностные обязанности:'>
            <TextArea
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.experienceInfo.${index}.duties`
              )}
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
