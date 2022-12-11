import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface Props {
  open?: boolean;
  close: () => void;
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  open,
  close
}) => {
  if (!open && typeof open !== 'undefined') {
    return null;
  }

  return createPortal(
    <div className={styles.modal} onClick={close}>
      {children}
    </div>,
    document.getElementById('portal') as HTMLElement
  );
};
