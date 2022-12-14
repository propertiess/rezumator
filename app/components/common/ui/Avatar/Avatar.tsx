import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface Props extends HTMLAttributes<unknown> {
  src?: string;
}

export const Avatar: FC<Props> = ({ src, ...rest }) => {
  if (!src) {
    return null;
  }

  return (
    <span className={styles.wrapper} {...rest}>
      <Image src={src} alt='avatar' layout='fill' />
    </span>
  );
};
