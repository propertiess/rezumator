import { FC } from 'react';
import styles from './Advantage.module.css';
import { AdvantageItem } from './AdvantageItem';
import { advantages } from './advantages.data';

export const AdvantageList: FC = () => {
  return (
    <div className={styles.list}>
      {advantages.map(advantage => (
        <AdvantageItem key={advantage.title} item={advantage} />
      ))}
    </div>
  );
};
