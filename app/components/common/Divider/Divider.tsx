import { FC } from 'react';
import classNames from 'classnames';
import styles from './Divider.module.css';

type Props = {
  className?: string;
};

export const Divider: FC<Props> = ({ className, ...rest }) => {
  const style = classNames(styles.wrapper, className);
  return <div className={style} data-testid='Divider' {...rest}></div>;
};
