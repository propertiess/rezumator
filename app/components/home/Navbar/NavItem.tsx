import { useRouter } from 'next/router';
import { FC } from 'react';
import classnames from 'classnames';
import { A } from '@/components/common/A';
import styles from './Navbar.module.css';

interface Props {
  href: string;
  title: string;
}

const NavItem: FC<Props> = ({ href, title }) => {
  const { asPath } = useRouter();
  const linkStyles = classnames(styles.link, {
    [styles.active]: href === asPath
  });

  return (
    <li className='li_padding'>
      <A className={linkStyles} href={href}>
        {title}
      </A>
    </li>
  );
};

export { NavItem };
