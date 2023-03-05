import { FC, HTMLProps, ReactNode } from 'react';

import { Loader } from '@/components/loader';

interface Props extends HTMLProps<unknown> {
  condition: boolean;
  text?: ReactNode;
}

const LoaderInButton: FC<Props> = ({ condition, text }) => {
  return (
    <>
      {condition ? (
        <>
          <Loader className='rounded-lg bg-[var(--primary-bg-color)]' />
          {text}
        </>
      ) : (
        <>{text}</>
      )}
    </>
  );
};

export { LoaderInButton };
