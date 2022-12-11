import Image from 'next/image';
import { FC } from 'react';
import LogoAvatar from '@/../public/logo.svg';
import { A } from '../A';
import styles from './Logo.module.css';

export const Logo: FC = () => {
  return (
    <A className={styles.wrapper} href='/'>
      <Image src={LogoAvatar} alt='logo' />
      <h2 className={styles.text}>Rezumator</h2>
    </A>
  );
};
