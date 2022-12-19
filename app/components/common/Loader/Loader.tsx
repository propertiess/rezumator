import { FC, HTMLAttributes } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.css';

type Props = HTMLAttributes<unknown>;

export const Loader: FC<Props> = ({ ...rest }) => {
  return (
    <div className='absolute bg-[var(--main-color)] top-0 z-10 left-0 w-full h-full'>
      <div className='flex justify-center'>
        <ClipLoader color='blue' />
      </div>
    </div>
  );
};
