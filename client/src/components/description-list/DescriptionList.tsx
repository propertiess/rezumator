import clsx from 'clsx';

type Props = {
  data: string;
};

export const DescriptionList = ({ data }: Props) => {
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
