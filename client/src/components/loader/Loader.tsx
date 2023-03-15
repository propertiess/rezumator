import { HTMLAttributes } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import clsx from 'clsx';

type Props = HTMLAttributes<unknown> & {
  className?: string;
};

export const Loader = ({ className, ...rest }: Props) => {
  return (
    <div
      className={clsx(
        'absolute top-0 z-10 left-0 w-full h-full flex justify-center items-center',
        className
      )}
      {...rest}
    >
      <ClipLoader size={30} color='white' />
    </div>
  );
};
