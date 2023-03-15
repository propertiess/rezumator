import { ReactNode } from 'react';

import { LinkData } from '@/screens/home/navbar/links.data';
import { NavItem } from '@/screens/home/navbar/NavItem';

import styles from './Navbar.module.css';

type Props = {
  links: LinkData[];
  logOutNode?: ReactNode;
};

export const Navbar = ({ links, logOutNode }: Props) => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {links.map(link => (
          <NavItem key={link.title} {...link} />
        ))}
        {logOutNode && <li>{logOutNode}</li>}
      </ul>
    </nav>
  );
};
