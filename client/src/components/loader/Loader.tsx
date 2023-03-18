import { HTMLAttributes } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import clsx from 'clsx';

type Props = HTMLAttributes<unknown> & {
  className?: string;
  size?: number;
};

export const Loader = ({ className, size = 18, ...rest }: Props) => {
  return (
    <div className={clsx('flex items-center', className)} {...rest}>
      <ClipLoader size={size} color='white' />
    </div>
  );
};
