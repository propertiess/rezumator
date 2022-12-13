import { FC } from 'react';
import { ModalNoSSR } from '@/components/common/Modal';
import { NavItem } from '../Navbar/NavItem';
import { links } from '../Navbar/links.data';
import styles from './Burger.module.css';

interface Props {
  open: boolean;
  close: () => void;
}

const classNames = {
  enter: styles.burger_menu_enter,
  enterActive: styles.burger_menu_enter_active,
  exitActive: styles.burger_menu_exit_active
};

const BurgerMenu: FC<Props> = ({ open, close }) => {
  return (
    <ModalNoSSR
      className='bg-[var(--main-color)]'
      timeoutContent={300}
      timeoutModal={300}
      modalClassNames={classNames}
      trigger={open}
      close={close}
    >
      <ul className='p-3'>
        {links.map(link => (
          <NavItem key={link.href} {...link} />
        ))}
        <NavItem href='/login' title='Войти' />
      </ul>
    </ModalNoSSR>
  );
};

export { BurgerMenu };
