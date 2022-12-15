import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '@/hooks/useClickOutside';
import styles from './Modal.module.css';

interface CSSClassNames {
  enter: string;
  enterActive: string;
  exitActive: string;
}

interface Props {
  trigger: boolean;
  triggerContent?: boolean;
  className?: string;
  timeoutModal?: number;
  timeoutContent: number;
  transitionClassNames?: CSSClassNames;
  modalClassNames?: CSSClassNames;
  onEnteringModal?: () => void;
  onExitingModal?: () => void;
  close: () => void;
}

const defaultCSSTransition = {
  enter: styles.modal_enter,
  enterActive: styles.modal_enter_active,
  exitActive: styles.modal_exit_active
};

export const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  trigger,
  close,
  className,
  timeoutModal = 500,
  timeoutContent,
  transitionClassNames,
  triggerContent,
  onEnteringModal,
  onExitingModal,
  modalClassNames = defaultCSSTransition
}) => {
  const ref = useClickOutside(close, trigger);

  const backdrop = classNames(styles.backdrop, className);

  return createPortal(
    <>
      <CSSTransition
        in={trigger}
        timeout={timeoutModal}
        classNames={modalClassNames}
        onEntering={onEnteringModal}
        onExiting={onExitingModal}
        mountOnEnter
        unmountOnExit
      >
        <div className={backdrop}>
          <CSSTransition
            in={triggerContent ?? true}
            timeout={timeoutContent}
            classNames={transitionClassNames}
            mountOnEnter
            unmountOnExit
          >
            <div ref={ref} className={styles.content}>
              {children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export const ModalNoSSR = dynamic(
  () => import('@/components/common/Modal').then(mod => mod.Modal),
  {
    ssr: false
  }
);
