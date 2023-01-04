import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { LinkData } from '@/components/home/Navbar/links.data';

type Props = HTMLAttributes<HTMLDivElement> & {
  links: LinkData[];
};

const Breadcrumbs: FC<PropsWithChildren<Props>> = ({ links, ...props }) => {
  const { asPath } = useRouter();
  return (
    <div className='text-gray-600 text-sm sm:text-2xl leading-5' {...props}>
      {links.map((link, index) => (
        <Fragment key={link.title}>
          <Link
            key={link.title}
            href={link.href}
            className={classNames('hover:underline', {
              'text-white pointer-events-none': asPath === link.href
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

export { Breadcrumbs };
