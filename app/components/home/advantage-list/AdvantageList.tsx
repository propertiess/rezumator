import { FC } from 'react';
import { useLayoutWidth } from '@/hooks/useLayoutWidth';
import styles from './Advantage.module.css';
import { AdvantageItem } from './AdvantageItem';
import { advantages } from './advantages.data';

export const AdvantageList: FC = () => {
  const width = useLayoutWidth();

  return (
    <ul className={styles.list}>
      {advantages.map(advantage => (
        <AdvantageItem key={advantage.title} item={advantage} width={width} />
      ))}
    </ul>
  );
};
