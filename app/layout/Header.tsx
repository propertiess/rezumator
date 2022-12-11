import { FC } from 'react';
import { Logo } from '@/components/common/Logo';
import { Burger } from '@/components/home/Burger';
import { Navbar } from '@/components/home/Navbar';
import styles from './Header.module.css';

const Header: FC = ({ ...rest }) => {
  return (
    <header {...rest}>
      <div className='container mx-auto'>
        <div className={styles.wrapper}>
          <ul>
            <li className='li_padding'>
              <Logo />
            </li>
          </ul>
          <Navbar />
          <Burger />
        </div>
      </div>
    </header>
  );
};

export { Header };
