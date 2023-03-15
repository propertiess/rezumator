import { FC } from 'react';
import clsx from 'clsx';

type Props = {
  data: string;
};

const DescriptionList: FC<Props> = ({ data }) => {
  return (
    <>
      {data.split('\n').map((line, idx) => {
        if (!line) {
          return <li key={idx} className='my-2 block' />;
        }

        return (
          <li key={line} className={clsx({ 'mt-2': idx === 0 })}>
            {line}
          </li>
        );
      })}
    </>
  );
};

export { DescriptionList };
