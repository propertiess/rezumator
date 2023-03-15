import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navbar.module.css';

interface Props {
  href: string;
  title: string;
}

const NavItem: FC<Props> = ({ href, title }) => {
  const { asPath } = useRouter();
  const linkStyles = clsx(styles.link, {
    [styles.active]: href === asPath,
  });

  return (
    <li>
      <Link className={linkStyles} href={href}>
        {title}
      </Link>
    </li>
  );
};

export { NavItem };
