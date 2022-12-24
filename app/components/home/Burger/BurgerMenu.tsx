import { FC, useContext } from 'react';
import { ModalNoSSR } from '@/components/common/Modal';
import { AuthContext } from '@/context/AuthContext';
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
  const { authToken, setAuthToken } = useContext(AuthContext);

  return (
    <ModalNoSSR
      className='bg-[var(--main-color)]'
      timeoutContent={300}
      modalClassNames={classNames}
      trigger={open}
      close={close}
    >
      <ul className='p-3'>
        {links.map(link => (
          <NavItem key={link.href} {...link} />
        ))}
        {!authToken ? (
          <>
            <NavItem href='/login' title='Войти' />
            <NavItem href='/signup' title='Регистрация' />
          </>
        ) : (
          <li className='li_padding'>
            <span
              onClick={() => {
                setAuthToken('');
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
