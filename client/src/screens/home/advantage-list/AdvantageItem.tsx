import { MouseEvent, useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { AVAILABLE_COLOR } from '@/utils/color';

import styles from './Advantage.module.css';

export type Advantage = {
  src: string;
  title: string;
  desc: string;
  color: AVAILABLE_COLOR | '';
};

type Props = {
  item: Advantage;
  isUseMouseMove?: boolean;
};

export const AdvantageItem = ({
  item: { desc, src, title, color },
  isUseMouseMove,
}: Props) => {
  const itemRef = useRef<HTMLLIElement>(null);

  const itemStyles = clsx(styles.item, {
    [styles.primary_container]: color === AVAILABLE_COLOR.primary,
  });

  const imgStyles = clsx(styles.img, {
    [styles.primary_img]: color === '',
    [styles.lime]: color !== '',
  });

  const descStyles = clsx({
    [styles.desc]: color !== AVAILABLE_COLOR.primary,
    'text-white': color === '',
  });

  const onMouseMove = (e: MouseEvent<HTMLLIElement>) => {
    if (!isUseMouseMove) {
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
