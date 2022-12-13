import { FC, HTMLAttributes, useState } from 'react';
import { AvatarCrop } from '@/components/common/AvatarCrop';
import { ModalNoSSR } from '@/components/common/Modal';
import { Button } from '@/components/common/ui/Button';
import styles from './AvatarCropModal.module.css';

interface Props extends HTMLAttributes<unknown> {
  src?: string;
  open: boolean;
  close: () => void;
  onImageChange: (src: string) => void;
}

const classNames = {
  enter: styles.content_enter,
  enterActive: styles.content_enter_active,
  exitActive: styles.content_exit_active
};

const AvatarCropModal: FC<Props> = ({ src, open, close, onImageChange }) => {
  const [preview, setPreview] = useState(src);

  return (
    <ModalNoSSR
      className={styles.modal}
      timeoutModal={300}
      timeoutContent={300}
      transitionClassNames={classNames}
      trigger={open}
      close={close}
    >
      <div className={styles.content}>
        <h5>Обрезать изображение</h5>
        <AvatarCrop src={src} onPreviewChange={src => setPreview(src)} />
        <div className={styles.btn_wrapper}>
          <Button
            onClick={() => {
              onImageChange(preview ?? '');
              close();
            }}
          >
            Сохранить
          </Button>
          <Button onClick={close}>Отменить</Button>
        </div>
      </div>
    </ModalNoSSR>
  );
};

export { AvatarCropModal };
