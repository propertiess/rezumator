import { FC } from 'react';
import classNames from 'classnames';

import { Label } from '@/components/common/label';
import { LabelForCheckbox } from '@/components/common/label-for-checkbox';
import { Input } from '@/components/common/ui/input';
import { Select } from '@/components/common/ui/select';
import { FormSectionLayout } from '@/components/rezumator/common/form-section-layout';
import { RezumatorProps } from '@/components/rezumator/types';
import { useFields } from '@/context';
import { AboutInfoState } from '@/types';
import { formatPhoneNumber } from '@/utils/helpers/formatPhoneNumber';
import { formatSalary } from '@/utils/helpers/formatSalary';

import { currencies, phoneCodes, scheduleOfWork } from './about.data';
import { AvatarPicker } from './avatar-picker';

import styles from '../Repeat.module.css';

type Props = RezumatorProps<AboutInfoState>;

export const About: FC<Props> = ({ register, errors }) => {
  // const { fields, setAvatar } = useFields();
  // const src = fields.aboutInfo.avatar;

  // const src = useAppSelector(
  //   state => state.rezumator.fields && state.rezumator.fields?.aboutInfo.avatar
  // );
  // const { setAvatar } = useActions();

  return (
    <FormSectionLayout title='Обо мне'>
      <div className={classNames(styles.col, styles.big_col)}>
        <Label label='Фамилия:'>
          <Input
            error={errors?.secondName}
            placeholder='Иванов'
            {...register('rezumator.aboutInfo.secondName', {
              required: true
            })}
          />
        </Label>
        <Label label='Имя:'>
          <Input
            placeholder='Иван'
            error={errors?.firstName}
            {...register('rezumator.aboutInfo.firstName', {
              required: true
            })}
          />
        </Label>
        <Label label='Отчество:'>
          <Input
            error={errors?.thirdName}
            placeholder='Иванович'
            {...register('rezumator.aboutInfo.thirdName')}
          />
        </Label>
        <Label label='Почта:'>
          <Input
            error={errors?.email}
            type='email'
            {...register('rezumator.aboutInfo.email', {
              required: true
            })}
          />
        </Label>
        <Label label='Телефон:'>
          <span className='flex flex-grow gap-2'>
            <Select
              options={phoneCodes}
              {...register('rezumator.aboutInfo.phoneNumber.code')}
            />
            <Input
              type='tel'
              error={errors?.phoneNumber}
              placeholder='(000) 000 00 00'
              {...register('rezumator.aboutInfo.phoneNumber.phone', {
                required: true,
                minLength: 15,
                onChange: e => {
                  e.target.value = formatPhoneNumber(e.target.value);
                }
              })}
            />
          </span>
        </Label>
        <Label label='Ожидаемая зарплата:'>
          <span className='flex flex-grow gap-2'>
            <Input
              error={errors?.salary}
              {...register('rezumator.aboutInfo.salary.amountOfMoney', {
                onChange: e => {
                  e.target.value = formatSalary(e.target.value);
                }
              })}
            />
            <Select
              options={currencies}
              {...register('rezumator.aboutInfo.salary.symbolOfMoney')}
            />
          </span>
        </Label>
        <Label label='График работы:'>
          <span className='flex flex-grow'>
            <Select
              className='basis-full'
              placeholder='Выберите из списка'
              options={scheduleOfWork}
              error={errors?.scheduleOfWork}
              {...register('rezumator.aboutInfo.scheduleOfWork')}
            />
          </span>
        </Label>
      </div>
      <div className={classNames(styles.col, styles.middle_col)}>
        <Label label='Фото:'>
          <AvatarPicker src={src ?? ''} onImageChange={src => setAvatar(src)} />
        </Label>
        <Label label='Должность:'>
          <Input
            error={errors?.profession}
            {...register('rezumator.aboutInfo.profession', {
              required: true
            })}
          />
        </Label>
        <LabelForCheckbox label='Готов к командировкам:'>
          <Input
            type='checkbox'
            {...register('rezumator.aboutInfo.readyForTravel')}
          />
        </LabelForCheckbox>
      </div>
    </FormSectionLayout>
  );
};
