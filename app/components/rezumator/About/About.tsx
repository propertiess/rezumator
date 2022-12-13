import { FC } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister
} from 'react-hook-form';
import { Label } from '@/components/common/Label';
import { Input } from '@/components/common/ui/Input';
import { Select } from '@/components/common/ui/Select';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';
import { AboutInfoState, RezumatorState } from '@/store/slices/rezumator';
import styles from './About.module.css';
import { AvatarPicker } from './AvatarPicker';

interface Props {
  register: UseFormRegister<{
    rezumator: RezumatorState;
  }>;
  errors?: Merge<FieldError, FieldErrorsImpl<AboutInfoState | FieldValues>>;
}

export const About: FC<Props> = ({ register, errors }) => {
  const src = useAppSelector(state => state.rezumator.aboutInfo.avatar);
  const { setAvatar } = useActions();

  return (
    <section className={styles.wrapper}>
      <div className={styles.col + ' ' + styles.big_col}>
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
          <span className='flex flex-grow gap-1'>
            <Select
              options={[{ value: '+ 7', label: '+ 7' }]}
              {...register('rezumator.aboutInfo.phoneNumber.code')}
            />
            <Input
              type='tel'
              error={errors?.phoneNumber}
              placeholder='(000) 000 00 00'
              {...register('rezumator.aboutInfo.phoneNumber.phone', {
                required: true
              })}
            />
          </span>
        </Label>
        <Label label='Ожидаемая зарплата:'>
          <span className='flex flex-grow gap-1'>
            <Input
              error={errors?.salary}
              {...register('rezumator.aboutInfo.salary.amountOfMoney')}
            />
            <Select
              options={[
                { value: '₽', label: '₽' },
                { value: '$', label: '$' }
              ]}
              {...register('rezumator.aboutInfo.salary.symbolOfMoney')}
            />
          </span>
        </Label>
        <Label label='Должность:'>
          <Input {...register('rezumator.aboutInfo.profession')} />
        </Label>
      </div>
      <div className={styles.col + ' ' + styles.middle_col}>
        <>
          <label>Фото:</label>
          <AvatarPicker src={src} onImageChange={src => setAvatar(src)} />
        </>
        <Label label='Готов к командировкам:'>
          <Input
            type='checkbox'
            {...register('rezumator.aboutInfo.readyForTravel')}
          />
        </Label>
      </div>
    </section>
  );
};
