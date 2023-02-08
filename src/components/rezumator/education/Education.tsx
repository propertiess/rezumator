import { Fragment, memo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import classNames from 'classnames';

import { Label } from '@/components/common/label';
import { Input } from '@/components/common/ui/input';
import { Select } from '@/components/common/ui/select';
import { AddRemoveButtons } from '@/components/rezumator/common/add-remove-buttons';
import { FormSectionLayout } from '@/components/rezumator/common/form-section-layout';
import { useAppSelector } from '@/store';
import { EducationState, initialEducation } from '@/store/slices/rezumator';
import { EDUCATION_YEARS } from '@/utils/constants/full-date';

import { RezumatorPropsWithControl } from '../types';

import { formOfEducation } from './education.data';

import styles from '../Repeat.module.css';

type Props = RezumatorPropsWithControl<EducationState>;

export const Education = memo(function Education({ register, control }: Props) {
  const education = useAppSelector(
    state => state.rezumator.fields?.educationInfo
  );

  const {
    fields: educationInfo,
    remove,
    insert,
    replace
  } = useFieldArray({ control, name: 'rezumator.educationInfo' });

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
              {...register(`rezumator.educationInfo.${index}.institute`)}
            />
          </Label>
          <div className={classNames(styles.col, styles.big_col)}>
            <Label label='Факультет:'>
              <Input
                {...register(`rezumator.educationInfo.${index}.faculty`)}
              />
            </Label>
            <Label label='Форма обучения:'>
              <Select
                className='basis-full'
                placeholder='Выберите из списка'
                options={formOfEducation}
                {...register(`rezumator.educationInfo.${index}.form`)}
              />
            </Label>
          </div>
          <div className={classNames(styles.col, styles.middle_col)}>
            <Label label='Специальность:'>
              <Input
                {...register(`rezumator.educationInfo.${index}.specialty`)}
              />
            </Label>
            <Label label='Год окончания:'>
              <Select
                className='basis-full'
                placeholder='Выберите из списка'
                options={EDUCATION_YEARS}
                {...register(`rezumator.educationInfo.${index}.end`)}
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
