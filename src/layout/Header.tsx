import { FC } from 'react';
import { Logo } from '@/components/common/logo';
import { Burger } from '@/components/home/burger';
import { Navbar } from '@/components/home/navbar';
import styles from './Header.module.css';

const Header: FC = ({ ...rest }) => {
  return (
    <header {...rest}>
      <div className='my_container'>
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
