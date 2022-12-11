import Link from 'next/link';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<unknown> {
  href: string;
}

export const A: FC<PropsWithChildren<Props>> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};
