import { FC } from 'react';
import classNames from 'classnames';
import { Label } from '@/components/common/Label';
import { Input } from '@/components/common/ui/Input';
import { Select } from '@/components/common/ui/Select';
import { PersonalInfoState } from '@/store/slices/rezumator';
import { DAYS, MONTHS, YEARS } from '@/utils/DateState.constant';
import styles from '../Repeat.module.css';
import { FormSectionLayout } from '../common/FormSectionLayout';
import { RezumatorProps } from '../interfaces';
import { removal } from './personal.data';

type Props = RezumatorProps<PersonalInfoState>;

export const Personal: FC<Props> = ({ register, errors }) => {
  return (
    <FormSectionLayout title='Личная информация'>
      <div className={classNames(styles.col, styles.big_col)}>
        <Label label='Город:'>
          <Input
            error={errors?.city}
            {...register('rezumator.personalInfo.city', {
              required: true
            })}
          />
        </Label>
        <Label label='Гражданство:'>
          <Input
            error={errors?.citizenShip}
            {...register('rezumator.personalInfo.citizenShip', {
              required: true
            })}
          />
        </Label>
      </div>
      <div className={classNames(styles.col, styles.middle_col)}>
        <Label label='Переезд:'>
          <Select
            className='flex-grow'
            placeholder='Выберите из списка'
            options={removal}
            error={errors?.removal}
            {...register('rezumator.personalInfo.removal')}
          />
        </Label>
        <Label label='Дата рождения:'>
          <span className='flex flex-grow gap-2'>
            <Select
              placeholder='День'
              options={DAYS}
              error={errors?.birthDay}
              {...register('rezumator.personalInfo.birthDay.day', {
                required: true
              })}
            />
            <Select
              placeholder='Месяц'
              options={MONTHS}
              error={errors?.birthDay}
              {...register('rezumator.personalInfo.birthDay.month', {
                required: true
              })}
            />
            <Select
              className='flex-grow'
              placeholder='Год'
              options={YEARS}
              error={errors?.birthDay}
              {...register('rezumator.personalInfo.birthDay.year', {
                required: true
              })}
            />
          </span>
        </Label>
      </div>
    </FormSectionLayout>
  );
};
