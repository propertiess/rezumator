import { FC } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { useOpenSwitcher } from '@/hooks/useOpenSwitcher';

import { FileInput } from '../file-input';

import { AvatarCropModal } from './AvatarCropModal';

import styles from './AvatarPicker.module.css';

interface Props {
  src?: string;
  onImageChange: (src: string) => void;
}

export const AvatarPicker: FC<Props> = ({ src, onImageChange }) => {
  const { setClose, isOpen, setOpen } = useOpenSwitcher();

  const resetImage = () => {
    onImageChange('');
    setClose();
  };

  return (
    <span className={styles.wrapper}>
      {src && (
        <div className='relative mx-auto h-72 w-72 sm:mx-0'>
          <Image src={src} alt='avatar' fill />
        </div>
      )}
      {!src ? (
        <FileInput
          accept='.png,.jpeg,.jpg'
          onImageChange={onImageChange}
          openModalCrop={setOpen}
        />
      ) : (
        <span className={styles.btn}>
          <Button onClick={resetImage}>Удалить</Button>
        </span>
      )}
      <AvatarCropModal
        open={isOpen}
        reset={resetImage}
        close={setClose}
        src={src}
        onImageChange={onImageChange}
      />
    </span>
  );
};
