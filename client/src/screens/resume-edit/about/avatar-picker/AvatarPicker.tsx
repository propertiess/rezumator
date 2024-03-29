import { FC } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { useDisclosure } from '@/hooks/useDisclosure';

import { FileInput } from '../file-input';

import { AvatarCropModal } from './AvatarCropModal';

import styles from './AvatarPicker.module.css';

interface Props {
  src?: string;
  onImageChange: (src: string) => void;
}

export const AvatarPicker: FC<Props> = ({ src, onImageChange }) => {
  const [isOpen, { close, open }] = useDisclosure(false);

  const resetImage = () => {
    onImageChange('');
    close();
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
          openModalCrop={open}
        />
      ) : (
        <span className={styles.btn}>
          <Button onClick={resetImage}>Удалить</Button>
        </span>
      )}
      <AvatarCropModal
        open={isOpen}
        reset={resetImage}
        close={close}
        src={src}
        onImageChange={onImageChange}
      />
    </span>
  );
};
