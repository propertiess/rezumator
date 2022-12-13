import { FC, useState } from 'react';
import { AvatarCrop } from '@/components/common/AvatarCrop';
import { Modal } from '@/components/common/Modal';
import { Avatar } from '@/components/common/ui/Avatar';
import { Button } from '@/components/common/ui/Button';
import { FileInput } from '../FileInput';
import { AvatarCropModal } from './AvatarCropModal';

interface Props {
  src?: string;
  onImageChange: (src: string) => void;
}

export const AvatarPicker: FC<Props> = ({ src, onImageChange }) => {
  const [openCrop, setOpenCrop] = useState(false);

  return (
    <span className='flex flex-col gap-3'>
      <Avatar src={src} />
      {!src ? (
        <FileInput accept='.png,.jpeg,.jpg' onImageChange={onImageChange} />
      ) : (
        <span className='flex gap-2'>
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
      {/* <Modal
        className='flex justify-center items-center bg-opacity-25'
        open={openCrop}
        close={() => setOpenCrop(false)}
      >
        <div
          className='flex flex-col bg-[var(--secondary-bg-color)] p-5 rounded-lg gap-5 max-h-96'
          onClick={e => e.stopPropagation()}
        >
          <h5>Обрезать изображение</h5>
          <AvatarCrop src={src} onPreviewChange={src => setPreview(src)} />
          <div className='flex gap-3'>
            <Button
              onClick={() => {
                onImageChange(preview ?? '');
                setOpenCrop(false);
              }}
            >
              Сохранить
            </Button>
            <Button onClick={() => setOpenCrop(false)}>Отменить</Button>
          </div>
        </div>
      </Modal> */}
    </span>
  );
};
