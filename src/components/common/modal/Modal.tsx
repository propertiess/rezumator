import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { AnimatePresence, AnimationProps, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { useClickOutside } from '@/hooks/useClickOutside';

import { defaultModalAnimation } from './default.animation';

import styles from './Modal.module.css';

interface Props {
  trigger: boolean;
  className?: string;
  contentAnimation?: AnimationProps;
  modalAnimation?: AnimationProps;
  close: () => void;
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  trigger,
  close,
  className,
  contentAnimation,

  modalAnimation = defaultModalAnimation
}) => {
  const ref = useClickOutside(close, trigger);

  const backdrop = classNames(styles.backdrop, className);

  return createPortal(
    <>
      <AnimatePresence>
        {trigger && (
          <motion.div className={backdrop} {...modalAnimation}>
            <motion.div {...contentAnimation}>
              <div ref={ref} className={styles.content}>
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export const ModalNoSSR = dynamic(
  () => import('@/components/common/modal').then(mod => mod.Modal),
  {
    ssr: false
  }
);
