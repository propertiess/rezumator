import { Fragment, HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LinkData } from '@/screens/home/navbar/links.data';

type Props = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    links: LinkData[];
  };

export const Breadcrumbs = ({ links, ...props }: Props) => {
  const { asPath } = useRouter();
  return (
    <div className='text-sm leading-5 text-gray-600 sm:text-2xl' {...props}>
      {links.map((link, index) => (
        <Fragment key={link.title}>
          <Link
            key={link.title}
            href={link.href}
            className={clsx('hover:underline', {
              'pointer-events-none text-white': asPath === link.href,
            })}
          >
            {link.title}
          </Link>
          {index !== links.length - 1 && <span> / </span>}
        </Fragment>
      ))}
    </div>
  );
};
