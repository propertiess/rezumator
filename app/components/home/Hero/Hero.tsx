import { FC, HTMLAttributes } from 'react';
import { A } from '@/components/common/A';
import { Button } from '@/components/common/ui/Button';
import { AVAILABLE_COLOR } from '@/utils/color';
import { AdvantageList } from '../AdvantageList';
import styles from './Hero.module.css';

type Props = HTMLAttributes<unknown>;

export const Hero: FC<Props> = ({ ...rest }) => {
  return (
    <div className={styles.wrapper} {...rest}>
      <h1>
        Онлайн <span className={styles.dark}>конструктор</span>
        <span className={styles.lime}>.</span>
      </h1>
      <p className={styles.desc}>
        Создай профессиональное резюме всего за 7 минут.
      </p>
      <A href='/rezumator'>
        <Button color={AVAILABLE_COLOR.primary} className={styles.btn}>
          Создать резюме
        </Button>
      </A>
      <AdvantageList />
    </div>
  );
};
