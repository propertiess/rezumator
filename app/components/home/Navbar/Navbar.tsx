import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import { Button } from '@/components/common/ui/Button';
import { useAuthReset } from '@/components/home/hooks/useAuthReset';
import { AVAILABLE_COLOR } from '@/utils/color';
import { NavItem } from './NavItem';
import styles from './Navbar.module.css';
import { links } from './links.data';

type Props = HTMLAttributes<unknown>;

export const Navbar: FC<Props> = ({ ...rest }) => {
  const { authToken, disconnect } = useAuthReset();

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
            <Button color={AVAILABLE_COLOR.secondary} onClick={disconnect}>
              Выйти
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
