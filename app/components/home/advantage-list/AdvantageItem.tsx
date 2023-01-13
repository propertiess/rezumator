import Image from 'next/image';
import { FC, HTMLAttributes, MouseEvent, useRef } from 'react';
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
  width?: number | null;
}

const AdvantageItem: FC<Props> = ({
  item: { desc, src, title, color },
  width
}) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const isUseMouseMove = width && width < 1020;

  const itemStyles = classNames(styles.item, {
    [styles.primary_container]: color === AVAILABLE_COLOR.primary
  });

  const imgStyles = classNames(styles.img, {
    [styles.primary_img]: color === '',
    [styles.lime]: color !== ''
  });

  const descStyles = classNames({
    [styles.desc]: color !== AVAILABLE_COLOR.primary,
    'text-white': color === ''
  });

  const onMouseMove = (e: MouseEvent<HTMLLIElement>) => {
    if (isUseMouseMove) {
      return;
    }

    if (!itemRef.current) {
      return;
    }

    const { x, y } = itemRef.current.getBoundingClientRect();
    itemRef.current.style.setProperty('--x', (e.clientX - x).toString());
    itemRef.current.style.setProperty('--y', (e.clientY - y).toString());
  };

  return (
    <li className={itemStyles} onMouseMove={onMouseMove} ref={itemRef}>
      <div className={imgStyles}>
        <Image sizes='100vw' src={src} alt={title} />
      </div>
      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        <p className={descStyles}>{desc}</p>
      </div>
    </li>
  );
};

export { AdvantageItem };
