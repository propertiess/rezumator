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

  const getLinks = () => {
    return isUser ? authorizedLinks : notAuthorizedLinks;
  };

  return (
    <header>
      <div className='my_container'>
        <div className='flex items-center justify-between py-5'>
          <Logo />
          <Navbar
            links={getLinks()}
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
            links={getLinks()}
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
