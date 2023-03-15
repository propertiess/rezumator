import { PropsWithChildren } from 'react';
import clsx from 'clsx';


type Props = PropsWithChildren & {
  label: string;
  spanClassName?: string;
  className?: string;
};

export const LabelForCheckbox = ({
  label,
  className,
  spanClassName,
  children,
}: Props) => {
  return (
    <label className={clsx('flex flex-wrap items-center gap-3', className)}>
      <span className={spanClassName}>{label}</span>
      {children}
    </label>
  );
};
