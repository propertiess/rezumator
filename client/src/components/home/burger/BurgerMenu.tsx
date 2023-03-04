import { FC } from 'react';

import { fadeInOutFromRight } from '@/animation';
import { ModalNoSSR } from '@/components/common/modal';
import { useAuthReset } from '@/components/home/hooks/useAuthReset';

import { links } from '../navbar/links.data';
import { NavItem } from '../navbar/NavItem';

import styles from './Burger.module.css';

interface Props {
  open: boolean;
  close: () => void;
}

const BurgerMenu: FC<Props> = ({ open, close }) => {
  const { authToken, logout } = useAuthReset();

  return (
    <ModalNoSSR
      className='bg-[var(--main-color)]'
      modalAnimation={fadeInOutFromRight}
      trigger={open}
      close={close}
    >
      <ul className={styles.list}>
        {links.map(link => (
          <NavItem key={link.href} {...link} />
        ))}
        {!authToken ? (
          <NavItem href='/authorization' title='Авторизация' />
        ) : (
          <li className='li_padding cursor-pointer'>
            <span
              onClick={() => {
                logout();
                close();
              }}
            >
              Выйти
            </span>
          </li>
        )}
      </ul>
    </ModalNoSSR>
  );
};

export { BurgerMenu };
