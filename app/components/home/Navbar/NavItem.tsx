import { useRouter } from 'next/router';
import { FC } from 'react';
import { A } from '@/components/common/A';
import styles from './Navbar.module.css';

interface Props {
  href: string;
  title: string;
}

const NavItem: FC<Props> = ({ href, title }) => {
  const { asPath } = useRouter();
  const stylesActive = href === asPath ? ` ${styles.active}` : '';

  return (
    <li>
      <A className={styles.link + stylesActive} href={href}>
        {title}
      </A>
    </li>
  );
};

export { NavItem };
