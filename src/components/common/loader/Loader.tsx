import { FC, HTMLAttributes } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import classNames from 'classnames';

type Props = HTMLAttributes<unknown> & {
  className?: string;
};

export const Loader: FC<Props> = ({ className, ...rest }) => {
  const style = classNames(
    'absolute top-0 z-10 left-0 w-full h-full flex justify-center items-center',
    className
  );
  return (
    <div className={style} {...rest}>
      <ClipLoader size={30} color='white' />
    </div>
  );
};
