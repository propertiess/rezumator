import clsx from 'clsx';

type Props = {
  className?: string;
};

export const Divider = ({ className }: Props) => {
  return (
    <div
      className={clsx('my-5 h-1 rounded', className)}
      data-testid='divider'
    />
  );
};
