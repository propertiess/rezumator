import { ReactNode } from 'react';

import { fadeInOutFromRight } from '@/animation';
import { ModalNoSSR } from '@/components/modal';

import { LinkData } from '../navbar/links.data';
import { NavItem } from '../navbar/NavItem';

type Props = {
  open: boolean;
  links: LinkData[];
  logOutNode?: ReactNode;
  close: () => void;
};

export const BurgerMenu = ({ open, links, close, logOutNode }: Props) => {
  return (
    <ModalNoSSR
      className='bg-main'
      modalAnimation={fadeInOutFromRight}
      trigger={open}
      close={close}
    >
      <ul className='p-3 text-center text-3xl'>
        {links.map(link => (
          <NavItem key={link.href} {...link} />
        ))}
        {logOutNode && <li className='cursor-pointer'>{logOutNode}</li>}
      </ul>
    </ModalNoSSR>
  );
};
