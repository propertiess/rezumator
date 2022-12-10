import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<unknown> {}

const Header: FC<Props> = ({ ...other }) => {
  return <header {...other}>header</header>;
};

export { Header };
