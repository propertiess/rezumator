import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import { Button } from '@/components/common/ui/Button';
import { AdvantageList } from '../AdvantageList';
import styles from './Hero.module.css';

type Props = HTMLAttributes<unknown>;

export const Hero: FC<Props> = ({ ...rest }) => {
  return (
    <section className={styles.wrapper} {...rest}>
      <h1>
        Онлайн <span className={styles.dark}>конструктор</span>
        <span className={styles.lime}>.</span>
      </h1>
      <p className={styles.desc}>
        Создай профессиональное резюме всего за 7 минут.
      </p>
      <Link href='/rezumator'>
        <Button className={styles.btn}>Создать резюме</Button>
      </Link>
      <AdvantageList />
    </section>
  );
};
