import { FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useAuthReset } from '@/screens/home/hooks/useAuthReset';
import { links } from '@/screens/home/navbar/links.data';
import { NavItem } from '@/screens/home/navbar/NavItem';
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
          <li className='li_padding'>
            <Link href='/authorization'>
              <Button color={AVAILABLE_COLOR.secondary}>Авторизация</Button>
            </Link>
          </li>
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
