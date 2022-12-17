import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import LogoAvatar from '@/../public/logo.svg';
import styles from './Logo.module.css';

export const Logo: FC = () => {
  return (
    <Link className={styles.wrapper} href='/'>
      <Image src={LogoAvatar} alt='logo' />
      <h2 className={styles.text}>Rezumator</h2>
    </Link>
  );
};
