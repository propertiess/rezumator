import clsx from 'clsx';

import { Label } from '@/components/label';
import { LabelForCheckbox } from '@/components/label-for-checkbox';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { ResumeEditFormEnum } from '@/hooks';
import { FormSectionLayout } from '@/screens/resume-edit/common/form-section-layout';
import { RezumatorProps } from '@/screens/resume-edit/types';
import { AboutInfoState } from '@/types';
import { formatPhoneNumber } from '@/utils/helpers/formatPhoneNumber';
import { formatSalary } from '@/utils/helpers/formatSalary';

import { currencies, phoneCodes, scheduleOfWork } from './about.data';
import { AvatarPicker } from './avatar-picker';

import styles from '../common/Repeat.module.css';

type Props = RezumatorProps<AboutInfoState> & {
  avatar: string;
  setAvatar: (src: string) => void;
};

export const About = ({ register, errors, avatar, setAvatar }: Props) => {
  return (
    <FormSectionLayout title='Обо мне'>
      <div className={clsx(styles.col, styles.big_col)}>
        <Label label='Фамилия:'>
          <Input
            error={errors?.secondName}
            placeholder='Иванов'
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.secondName`,
              {
                required: true,
              }
            )}
          />
        </Label>
        <Label label='Имя:'>
          <Input
            placeholder='Иван'
            error={errors?.firstName}
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.firstName`,
              {
                required: true,
              }
            )}
          />
        </Label>
        <Label label='Отчество:'>
          <Input
            error={errors?.thirdName}
            placeholder='Иванович'
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.thirdName`
            )}
          />
        </Label>
        <Label label='Почта:'>
          <Input
            error={errors?.email}
            type='email'
            {...register(`${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.email`, {
              required: true,
            })}
          />
        </Label>
        <Label label='Телефон:'>
          <span className='flex flex-grow gap-2'>
            <Select
              options={phoneCodes}
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.phoneNumber.code`
              )}
            />
            <Input
              type='tel'
              error={errors?.phoneNumber}
              placeholder='(000) 000 00 00'
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.phoneNumber.phone`,
                {
                  required: true,
                  minLength: 15,
                  onChange: e => {
                    e.target.value = formatPhoneNumber(e.target.value);
                  },
                }
              )}
            />
          </span>
        </Label>
        <Label label='Ожидаемая зарплата:'>
          <span className='flex flex-grow gap-2'>
            <Input
              error={errors?.salary}
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.salary.amountOfMoney`,
                {
                  onChange: e => {
                    e.target.value = formatSalary(e.target.value);
                  },
                }
              )}
            />
            <Select
              options={currencies}
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.salary.symbolOfMoney`
              )}
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
              {...register(
                `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.scheduleOfWork`
              )}
            />
          </span>
        </Label>
      </div>
      <div className={clsx(styles.col, styles.middle_col)}>
        <Label label='Фото:'>
          <AvatarPicker src={avatar} onImageChange={src => setAvatar(src)} />
        </Label>
        <Label label='Должность:'>
          <Input
            error={errors?.profession}
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.profession`,
              {
                required: true,
              }
            )}
          />
        </Label>
        <LabelForCheckbox label='Готов к командировкам:'>
          <Input
            type='checkbox'
            {...register(
              `${ResumeEditFormEnum.RESUME_EDIT}.aboutInfo.readyForTravel`
            )}
          />
        </LabelForCheckbox>
      </div>
    </FormSectionLayout>
  );
};
