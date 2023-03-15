import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui';
import { useDisclosure } from '@/hooks';
import { BurgerIcon, BurgerMenu } from '@/screens/home/burger';
import { useAuthReset } from '@/screens/home/hooks/useAuthReset';
import { Navbar } from '@/screens/home/navbar';
import {
  authorizedLinks,
  notAuthorizedLinks,
} from '@/screens/home/navbar/links.data';
import { AVAILABLE_COLOR } from '@/utils/color';

export const Header = observer(() => {
  const { isUser, logout } = useAuthReset();
  const [showBurgerMenu, { close, open }] = useDisclosure(false);

  const links = useMemo(() => {
    return isUser ? authorizedLinks : notAuthorizedLinks;
  }, [isUser]);

  return (
    <header>
      <div className='my_container'>
        <div className='flex items-center justify-between py-5'>
          <Logo />
          <Navbar
            links={links}
            logOutNode={
              isUser ? (
                <Button color={AVAILABLE_COLOR.secondary} onClick={logout}>
                  Выйти
                </Button>
              ) : undefined
            }
          />
          <BurgerMenu
            open={showBurgerMenu}
            close={close}
            links={links}
            logOutNode={
              isUser ? (
                <span
                  onClick={() => {
                    logout();
                    close();
                  }}
                >
                  Выйти
                </span>
              ) : undefined
            }
          />
          <BurgerIcon onClick={open} />
        </div>
      </div>
    </header>
  );
});
