import Link from 'next/link';
import { FC, Fragment, PropsWithChildren } from 'react';
import { LinkData } from '@/components/home/Navbar/links.data';

type Props = {
  links: LinkData[];
  last: string;
};

const Breadcrumbs: FC<PropsWithChildren<Props>> = ({ links, last }) => {
  return (
    <div className='text-gray-600 text-sm sm:text-2xl leading-5'>
      {links.map(link => (
        <Fragment key={link.title}>
          <Link key={link.title} href={link.href} className='hover:underline'>
            {link.title}
          </Link>
          <span> / </span>
        </Fragment>
      ))}
      <span className='text-white cursor-pointer hover:underline'>{last}</span>
    </div>
  );
};

export { Breadcrumbs };
