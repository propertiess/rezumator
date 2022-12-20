import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { AVAILABLE_COLOR } from '@/utils/color';
import styles from './Advantage.module.css';

export interface Advantage {
  src: string;
  title: string;
  desc: string;
  color: AVAILABLE_COLOR | '';
}

interface Props extends HTMLAttributes<unknown> {
  item: Advantage;
}

const AdvantageItem: FC<Props> = ({
  item: { desc, src, title, color },
  ...rest
}) => {
  const itemStyles = classNames(styles.item, {
    [styles.primary]: color === AVAILABLE_COLOR.primary
  });

  const imgStyles = classNames(styles.img, {
    [styles.primary]: color === '',
    [styles.lime]: color !== ''
  });

  const descStyles = classNames({
    [styles.desc]: color !== AVAILABLE_COLOR.primary,
    'text-white': color === ''
  });

  return (
    <div className={itemStyles} {...rest}>
      <div className={imgStyles}>
        <Image sizes='100vw' src={src} alt={title} />
      </div>
      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        <p className={descStyles}>{desc}</p>
      </div>
    </div>
  );
};

export { AdvantageItem };
