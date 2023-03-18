import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { AnimatePresence, AnimationProps, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { useClickOutside } from '@/hooks/useClickOutside';

import { defaultModalAnimation } from './default.animation';

import styles from './Modal.module.css';

type Props = PropsWithChildren & {
  trigger: boolean;
  className?: string;
  contentAnimation?: AnimationProps;
  modalAnimation?: AnimationProps;
  close: () => void;
};

export const Modal = ({
  children,
  trigger,
  close,
  className,
  contentAnimation,
  modalAnimation = defaultModalAnimation,
}: Props) => {
  const ref = useClickOutside(close, trigger);

  const backdrop = clsx(styles.backdrop, className);

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
  () => import('@/components/modal/index').then(mod => mod.Modal),
  {
    ssr: false,
  }
);
