import { FC } from 'react';

import { AdvantageItem } from './AdvantageItem';
import { advantages } from './advantages.data';

import { useLayoutWidth } from '@/hooks/useLayoutWidth';

import styles from './Advantage.module.css';

export const AdvantageList: FC = () => {
  const width = useLayoutWidth();
  const isUseMouseMove = Boolean(width && width >= 1020);

  return (
    <ul className={styles.list}>
      {advantages.map(advantage => (
        <AdvantageItem
          key={advantage.title}
          item={advantage}
          isUseMouseMove={isUseMouseMove}
        />
      ))}
    </ul>
  );
};
