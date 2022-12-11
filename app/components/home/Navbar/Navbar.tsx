import { FC, HTMLAttributes } from 'react';
import { A } from '@/components/common/A';
import { Button } from '@/components/common/ui/Button';
import { AVAILABLE_COLOR } from '@/utils/color';
import { NavItem } from './NavItem';
import styles from './Navbar.module.css';
import { links } from './links.data';

type Props = HTMLAttributes<unknown>;

export const Navbar: FC<Props> = ({ ...rest }) => {
  return (
    <nav className={styles.wrapper} {...rest}>
      <ul className={styles.list}>
        {links.map(link => (
          <NavItem key={link.title} {...link} />
        ))}
        <li>
          <A href='/login'>
            <Button color={AVAILABLE_COLOR.secondary}>Войти</Button>
          </A>
        </li>
      </ul>
    </nav>
  );
};
