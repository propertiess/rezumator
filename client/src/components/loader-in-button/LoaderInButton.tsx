import { ReactNode } from 'react';

import { Loader } from '@/components/loader';

type Props = {
  condition: boolean;
  text?: ReactNode;
};

const LoaderInButton = ({ condition, text }: Props) => {
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
