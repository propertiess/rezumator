import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Modal } from '@/components/common/Modal';
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
    <CSSTransition
      in={open}
      timeout={300}
      classNames={classNames}
      mountOnEnter
      unmountOnExit
    >
      <Modal close={close}>
        <ul className='p-3' onClick={e => e.stopPropagation()}>
          {links.map(link => (
            <NavItem key={link.href} {...link} />
          ))}
          <NavItem href='/login' title='Войти' />
        </ul>
      </Modal>
    </CSSTransition>
  );
};

export { BurgerMenu };
