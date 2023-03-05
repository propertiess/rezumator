import { FC } from 'react';
import classNames from 'classnames';

import { Label } from '@/components/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { ResumeEditFormEnum } from '@/hooks';
import { FormSectionLayout } from '@/screens/resume-edit/common/form-section-layout';
import { PersonalInfoState } from '@/types';
import { DAYS, MONTHS, YEARS } from '@/utils/consts/full-date';

import { RezumatorProps } from '../types';

import { removal } from './personal.data';

import styles from '../common/Repeat.module.css';

type Props = RezumatorProps<PersonalInfoState>;

export const Personal: FC<Props> = ({ register, errors }) => {
  return (
    <FormSectionLayout title='Личная информация'>
      <div className={classNames(styles.col, styles.big_col)}>
        <Label label='Город:'>
          <Input
            error={errors?.city}
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.personalInfo.city`,
              {
                required: true,
              }
            )}
          />
        </Label>
        <Label label='Гражданство:'>
          <Input
            error={errors?.citizenShip}
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.personalInfo.citizenShip`,
              {
                required: true,
              }
            )}
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
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.personalInfo.removal`
            )}
          />
        </Label>
        <Label label='Дата рождения:'>
          <span className='flex flex-grow gap-2'>
            <Select
              placeholder='День'
              options={DAYS}
              error={errors?.birthDay}
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.personalInfo.birthDay.day`,
                {
                  required: true,
                }
              )}
            />
            <Select
              placeholder='Месяц'
              options={MONTHS}
              error={errors?.birthDay}
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.personalInfo.birthDay.month`,
                {
                  required: true,
                }
              )}
            />
            <Select
              className='flex-grow'
              placeholder='Год'
              options={YEARS}
              error={errors?.birthDay}
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.personalInfo.birthDay.year`,
                {
                  required: true,
                }
              )}
            />
          </span>
        </Label>
      </div>
    </FormSectionLayout>
  );
};
