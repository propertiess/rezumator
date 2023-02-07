import { FC } from 'react';

import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/common/ui/input';

import { SimpleUser } from '@/services/auth/auth.types';

type Props = {
  register: UseFormRegister<SimpleUser>;
  errors: Partial<FieldErrorsImpl<SimpleUser>>;
};

const AuthFields: FC<Props> = ({ register, errors }) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <Input
        error={errors.username}
        placeholder='Имя пользователя'
        {...register('username', {
          required: true,
          minLength: 2,
          onChange: e => (e.target.value = e.target.value.replace(/\s/, ''))
        })}
      />
      <Input
        error={errors.password}
        type='password'
        placeholder='Пароль'
        {...register('password', {
          required: true,
          minLength: 5,
          onChange: e => (e.target.value = e.target.value.replace(/\s/, ''))
        })}
      />
    </div>
  );
};

export { AuthFields };
