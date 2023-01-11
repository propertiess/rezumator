import { FC, FormEventHandler, HTMLProps } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { AuthFields } from '@/components/common/auth-fields/AuthFields';
import { Button } from '@/components/common/ui/button';
import { SimpleUser } from '@/services/auth/auth.types';
import styles from '@/styles/Auth.repeat.module.css';

interface Props extends HTMLProps<unknown> {
  register: UseFormRegister<SimpleUser>;
  isSubmitting: boolean;
  error: string;
  errors: Partial<FieldErrorsImpl<SimpleUser>>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitButtonText: string;
}

const AuthForm: FC<Props> = ({
  register,
  errors,
  error,
  onSubmit,
  isSubmitting,
  submitButtonText
}) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <AuthFields register={register} errors={errors} />
        {error && <span className={styles.error}>{error}</span>}
        <Button loader={isSubmitting} type='submit' className={styles.btn}>
          {submitButtonText}
        </Button>
      </form>
    </div>
  );
};

export { AuthForm };
