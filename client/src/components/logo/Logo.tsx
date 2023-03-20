import Image from 'next/image';
import Link from 'next/link';

import LogoAvatar from '@/../public/logo.svg';

import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Link className={styles.wrapper} href='/'>
      <Image width={30} height={28} src={LogoAvatar} alt='Logo' />
      <h2 className={styles.text}>Rezumator</h2>
    </Link>
  );
};
