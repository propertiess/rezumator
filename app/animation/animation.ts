import { AnimationProps } from 'framer-motion';

export const fadeInOutFromRight: AnimationProps = {
  initial: {
    opacity: 0,
    x: '100%'
  },

  transition: {
    type: 'spring',
    duration: 0.5
  },

  animate: {
    opacity: 1,
    x: '0'
  },

  exit: {
    opacity: 0,
    x: '100%'
  }
};
