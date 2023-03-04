import { FC, HTMLAttributes, useEffect, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/common/ui/button';
import { useAuth } from '@/context';
import { UserService } from '@/services/user/user.service';

import { AdvantageList } from '../advantage-list';

import styles from './Hero.module.css';

type Props = HTMLAttributes<unknown>;

export const Hero: FC<Props> = ({ ...rest }) => {
  const { authToken } = useAuth();
  const [resumeId, setResumeId] = useState('');

  useEffect(() => {
    if (!authToken) {
      return;
    }

    const getResumeId = async () => {
      try {
        const user = await UserService.getById(authToken as string);
        setResumeId(user.fields._id);
      } catch (e) {
        console.log(e);
      }
    };

    getResumeId();
  }, [authToken]);

  return (
    <section className={styles.wrapper} {...rest}>
      <h1>
        Онлайн <span className={styles.dark}>конструктор</span>
        <span className={styles.lime}>.</span>
      </h1>
      <p className={styles.desc}>
        Создай профессиональное резюме всего за 7 минут.
      </p>
      <Link href={authToken ? `/resume/edit/${resumeId}` : `/resume/edit`}>
        <Button className={styles.btn}>Создать резюме</Button>
      </Link>
      <AdvantageList />
    </section>
  );
};
