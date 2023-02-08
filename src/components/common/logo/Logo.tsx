import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoAvatar from '@/../public/logo.svg';

import styles from './Logo.module.css';

export const Logo: FC = () => {
  return (
    <Link className={styles.wrapper} href='/'>
      <span className='relative block h-[30px] w-[30px]'>
        <Image className='image' src={LogoAvatar} alt='logo' sizes='100vw' />
      </span>
      <h2 className={styles.text}>Rezumator</h2>
    </Link>
  );
};
