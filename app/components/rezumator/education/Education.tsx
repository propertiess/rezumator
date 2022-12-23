import { FC, Fragment, useEffect } from 'react';
import classNames from 'classnames';
import { useFieldArray } from 'react-hook-form';
import { Label } from '@/components/common/Label';
import { Input } from '@/components/common/ui/Input';
import { Select } from '@/components/common/ui/Select';
import { useAppSelector } from '@/store';
import { EducationState, initialEducation } from '@/store/slices/rezumator';
import { EDUCATION_YEARS } from '@/utils/DateState.constant';
import styles from '../Repeat.module.css';
import { FormSectionLayout } from '../common/FormSectionLayout';
import { RezumatorPropsWithControl } from '../interfaces';
import { AddRemoveButtons } from './../common/AddRemoveButtons/AddRemoveButtons';
import { formOfEducation } from './education.data';

type Props = RezumatorPropsWithControl<EducationState>;

export const Education: FC<Props> = ({ register, control }) => {
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
};
