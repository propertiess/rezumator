import { FC, useState } from 'react';
import { Avatar } from '@/components/common/ui/Avatar';
import { Button } from '@/components/common/ui/Button';
import { FileInput } from '../FileInput';
import { AvatarCropModal } from './AvatarCropModal';
import styles from './AvatarPicker.module.css';

interface Props {
  src?: string;
  onImageChange: (src: string) => void;
}

export const AvatarPicker: FC<Props> = ({ src, onImageChange }) => {
  const [openCrop, setOpenCrop] = useState(false);

  return (
    <span className={styles.wrapper}>
      <Avatar src={src} />
      {!src ? (
        <FileInput accept='.png,.jpeg,.jpg' onImageChange={onImageChange} />
      ) : (
        <span className={styles.btn_group}>
          <Button onClick={() => setOpenCrop(true)}>Отредактировать</Button>
          <Button onClick={() => onImageChange('')}>Удалить</Button>
        </span>
      )}
      <AvatarCropModal
        open={openCrop}
        close={() => setOpenCrop(false)}
        src={src}
        onImageChange={onImageChange}
      />
    </span>
  );
};
