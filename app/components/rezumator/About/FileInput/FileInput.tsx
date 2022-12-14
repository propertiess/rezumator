import { ChangeEventHandler, FC, InputHTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge
} from 'react-hook-form';
import { Button } from '@/components/common/ui/Button';
import styles from './FileInput.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  onImageChange?: (src: string) => void;
  openModalCrop?: () => void;
}

const FileInput: FC<Props> = ({
  className,
  error,
  onImageChange,
  openModalCrop,
  ...rest
}) => {
  const style = classNames(className, {
    [styles.error]: error
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
        console.error(e);
      }
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input type='file' ref={inputRef} hidden onChange={onChange} {...rest} />
      <Button
        className={style}
        onClick={() => inputRef.current?.click()}
        type='button'
      >
        Загрузить файл
      </Button>
    </>
  );
};

export { FileInput };
