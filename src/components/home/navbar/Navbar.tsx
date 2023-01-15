import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

import { Button } from '@/components/common/ui/button';
import { useAuthReset } from '@/components/home/hooks/useAuthReset';
import { NavItem } from '@/components/home/navbar/NavItem';
import { links } from '@/components/home/navbar/links.data';

import { AVAILABLE_COLOR } from '@/utils/color';

import styles from './Navbar.module.css';

type Props = HTMLAttributes<unknown>;

export const Navbar: FC<Props> = ({ ...rest }) => {
  const { authToken, logout } = useAuthReset();

  return (
    <nav className={styles.wrapper} {...rest}>
      <ul className={styles.list}>
        {links.map(link => (
          <NavItem key={link.title} {...link} />
        ))}
        {!authToken ? (
          <>
            <li className='li_padding'>
              <Link href='/login'>
                <Button color={AVAILABLE_COLOR.secondary}>Войти</Button>
              </Link>
            </li>
            <li className='li_padding'>
              <Link href='/signup'>
                <Button color={AVAILABLE_COLOR.secondary}>Регистрация</Button>
              </Link>
            </li>
          </>
        ) : (
          <li className='li_padding'>
            <Button color={AVAILABLE_COLOR.secondary} onClick={logout}>
              Выйти
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
