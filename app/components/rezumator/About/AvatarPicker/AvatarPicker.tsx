import { Avatar } from '@/components/common/ui/Avatar';
import { Button } from '@/components/common/ui/Button';
import { useAvatarCropModal } from '@/hooks/useAvatarCropModal';
import { FC } from 'react';
import { FileInput } from '../FileInput';
import { AvatarCropModal } from './AvatarCropModal';
import styles from './AvatarPicker.module.css';

interface Props {
  src?: string;
  onImageChange: (src: string) => void;
}

export const AvatarPicker: FC<Props> = ({ src, onImageChange }) => {
  const { closeModal, isOpen, openModal } = useAvatarCropModal();

  const resetImage = () => {
    onImageChange('');
    closeModal();
  };

  return (
    <span className={styles.wrapper}>
      <Avatar src={src} />
      {!src ? (
        <FileInput
          accept='.png,.jpeg,.jpg'
          onImageChange={onImageChange}
          openModalCrop={openModal}
        />
      ) : (
        <span className={styles.btn_group}>
          <Button onClick={resetImage}>Удалить</Button>
        </span>
      )}
      <AvatarCropModal
        open={isOpen}
        reset={resetImage}
        close={closeModal}
        src={src}
        onImageChange={onImageChange}
      />
    </span>
  );
};
