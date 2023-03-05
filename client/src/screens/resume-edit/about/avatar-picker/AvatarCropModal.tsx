import { FC, HTMLAttributes, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { AnimationProps } from 'framer-motion';

import { ModalNoSSR } from '@/components/modal';
import { Button } from '@/components/ui';

import styles from './AvatarCropModal.module.css';

interface Props extends HTMLAttributes<unknown> {
  src?: string;
  open: boolean;
  reset: () => void;
  close: () => void;
  onImageChange: (src: string) => void;
}

const contentAnimation: AnimationProps = {
  initial: {
    scale: 0,
  },

  transition: {
    type: 'spring',
  },

  animate: {
    scale: 1,
  },

  exit: {
    scale: 0,
  },
};

const AvatarCropModal: FC<Props> = ({
  src,
  open,
  reset,
  close,
  onImageChange,
}) => {
  const [scale, setScale] = useState(1);
  const editorRef = useRef<AvatarEditor>(null);

  const onSaveCropImage = async () => {
    onImageChange(editorRef.current?.getImage().toDataURL() ?? '');
    close();
  };

  return (
    <ModalNoSSR
      className={styles.modal}
      contentAnimation={contentAnimation}
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
