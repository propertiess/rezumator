import { FC, HTMLAttributes, useState } from 'react';
import { BurgerMenu } from '@/components/home/burger/BurgerMenu';
import styles from './Burger.module.css';

type Props = HTMLAttributes<unknown>;

export const Burger: FC<Props> = ({ ...rest }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <div className={styles.wrapper} {...rest}>
      <ul>
        <li className='li_padding'>
          <div
            className={styles.burger_icon}
            onClick={() => setShowBurgerMenu(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>
      <BurgerMenu
        open={showBurgerMenu}
        close={() => setShowBurgerMenu(false)}
      />
    </div>
  );
};
