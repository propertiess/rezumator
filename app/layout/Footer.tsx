import { FC, HTMLAttributes } from 'react';
import styles from './Footer.module.css';

interface Props extends HTMLAttributes<unknown> {}

const Footer: FC<Props> = ({ ...other }) => {
  return (
    <footer className='p-2' {...other}>
      footer
    </footer>
  );
};

export { Footer };
