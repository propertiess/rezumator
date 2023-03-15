import { Fragment, memo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import clsx from 'clsx';

import { Label } from '@/components/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { initialEducation } from '@/context';
import { ResumeEditFormEnum } from '@/hooks';
import { AddRemoveButtons } from '@/screens/resume-edit/common/add-remove-buttons';
import { FormSectionLayout } from '@/screens/resume-edit/common/form-section-layout';
import { EducationState } from '@/types';
import { EDUCATION_YEARS } from '@/utils/consts/full-date';

import { RezumatorPropsWithControl } from '../types';

import { formOfEducation } from './education.data';

import styles from '../common/Repeat.module.css';

type Props = RezumatorPropsWithControl<EducationState> & {
  education: EducationState[];
};

export const Education = memo(function Education({
  register,
  control,
  education,
}: Props) {
  const {
    fields: educationInfo,
    remove,
    insert,
    replace,
  } = useFieldArray({
    control,
    name: `${ResumeEditFormEnum.RESUME_EDIT}.educationInfo`,
  });

  // TODO: think about another way

  useEffect(() => {
    education && replace(education);
  }, [education, replace]);

  //
  return (
    <FormSectionLayout title='Образование'>
      {educationInfo.map((education, index) => (
        <Fragment key={education.id}>
          <Label label='Учебное заведение:' className='flex-grow basis-full'>
            <Input
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.educationInfo.${index}.institute`
              )}
            />
          </Label>
          <div className={clsx(styles.col, styles.big_col)}>
            <Label label='Факультет:'>
              <Input
                {...register(
                  `${ResumeEditFormEnum.RESUME_EDIT}.educationInfo.${index}.faculty`
                )}
              />
            </Label>
            <Label label='Форма обучения:'>
              <Select
                className='basis-full'
                placeholder='Выберите из списка'
                options={formOfEducation}
                {...register(
                  `${ResumeEditFormEnum.RESUME_EDIT}.educationInfo.${index}.form`
                )}
              />
            </Label>
          </div>
          <div className={clsx(styles.col, styles.middle_col)}>
            <Label label='Специальность:'>
              <Input
                {...register(
                  `${ResumeEditFormEnum.RESUME_EDIT}.educationInfo.${index}.specialty`
                )}
              />
            </Label>
            <Label label='Год окончания:'>
              <Select
                className='basis-full'
                placeholder='Выберите из списка'
                options={EDUCATION_YEARS}
                {...register(
                  `${ResumeEditFormEnum.RESUME_EDIT}.educationInfo.${index}.end`
                )}
              />
            </Label>
          </div>
        </Fragment>
      ))}
      <AddRemoveButtons
        length={educationInfo.length}
        insert={() => insert(educationInfo.length, initialEducation)}
        remove={remove}
      />
    </FormSectionLayout>
  );
});
