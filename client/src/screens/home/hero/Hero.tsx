import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { AdvantageList } from '../advantage-list';

import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <h1>
        Онлайн <span className={styles.dark}>конструктор</span>
        <span className={styles.lime}>.</span>
      </h1>
      <p className={styles.desc}>
        Создай профессиональное резюме всего за 7 минут.
      </p>
      <Link href='/resume/edit'>
        <Button className={styles.btn}>Создать резюме</Button>
      </Link>
      <AdvantageList />
    </section>
  );
};
