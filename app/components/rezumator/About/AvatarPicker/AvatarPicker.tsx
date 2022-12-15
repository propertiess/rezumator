import { FC } from 'react';
import { Avatar } from '@/components/common/ui/Avatar';
import { Button } from '@/components/common/ui/Button';
import { useOpenSwitcher } from '@/hooks/useOpenSwitcher';
import { FileInput } from '../FileInput';
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
      <Avatar src={src} />
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
