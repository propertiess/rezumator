import { FC, HTMLProps, ReactNode } from 'react';

import { Loader } from '@/components/common/loader';

interface Props extends HTMLProps<unknown> {
  condition: boolean;
  text?: ReactNode;
}

const LoaderInButton: FC<Props> = ({ condition, text }) => {
  return (
    <>
      {condition ? (
        <>
          <Loader className='bg-[var(--primary-bg-color)] rounded-lg' />
          {text}
        </>
      ) : (
        <>{text}</>
      )}
    </>
  );
};

export { LoaderInButton };
