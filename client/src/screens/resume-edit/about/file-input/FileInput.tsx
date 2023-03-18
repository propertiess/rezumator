import { ChangeEventHandler, InputHTMLAttributes, useRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';

import styles from './FileInput.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  onImageChange?: (src: string) => void;
  openModalCrop?: () => void;
};

export const FileInput = ({
  className,
  error,
  onImageChange,
  openModalCrop,
  ...rest
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const style = clsx(className, {
    [styles.error]: error,
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let a = reader.result;
        a = a!.toString();
        onImageChange && onImageChange(a);
        openModalCrop && openModalCrop();
      };
      try {
        reader.readAsDataURL(e.target.files[0]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  };

  const onClickFileInput = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input type='file' ref={inputRef} hidden onChange={onChange} {...rest} />
      <Button className={style} onClick={onClickFileInput} type='button'>
        Добавить
      </Button>
    </>
  );
};
