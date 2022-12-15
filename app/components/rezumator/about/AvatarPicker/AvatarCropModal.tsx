import { FC, HTMLAttributes, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { ModalNoSSR } from '@/components/common/Modal';
import { Button } from '@/components/common/ui/Button';
import { useOpenSwitcher } from '@/hooks/useOpenSwitcher';
import styles from './AvatarCropModal.module.css';

interface Props extends HTMLAttributes<unknown> {
  src?: string;
  open: boolean;
  reset: () => void;
  close: () => void;
  onImageChange: (src: string) => void;
}

const classNames = {
  enter: styles.content_enter,
  enterActive: styles.content_enter_active,
  exitActive: styles.content_exit_active
};

const AvatarCropModal: FC<Props> = ({
  src,
  open,
  reset,
  close,
  onImageChange
}) => {
  const [scale, setScale] = useState(1);
  const { isOpen, setClose, setOpen } = useOpenSwitcher();

  const editorRef = useRef<AvatarEditor>(null);

  const onSaveCropImage = async () => {
    onImageChange(editorRef.current?.getImage().toDataURL() ?? '');
    close();
  };

  return (
    <ModalNoSSR
      className={styles.modal}
      onEnteringModal={setOpen}
      onExitingModal={setClose}
      triggerContent={isOpen}
      timeoutContent={500}
      transitionClassNames={classNames}
      trigger={open}
      close={reset}
    >
      <div className={styles.content}>
        <h5>Обрезать изображение</h5>
        <div className='flex justify-center overflow-hidden'>
          <AvatarEditor
            image={src ?? ''}
            height={250}
            width={250}
            scale={scale}
            ref={editorRef}
          />
        </div>
        <input
          value={scale}
          onChange={e => setScale(+e.target.value)}
          min={1}
          step={0.01}
          max={2}
          type='range'
        />
        <div className={styles.btn_wrapper}>
          <Button onClick={reset}>Отменить</Button>
          <Button onClick={onSaveCropImage}>Сохранить</Button>
        </div>
      </div>
    </ModalNoSSR>
  );
};

export { AvatarCropModal };
