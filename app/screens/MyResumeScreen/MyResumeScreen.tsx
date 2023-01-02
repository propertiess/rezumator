import { useRouter } from 'next/router';
import { FC, HTMLAttributes, useRef } from 'react';
import { Button } from '@/components/common/ui/Button';
import { Resume } from '@/components/myresume/Resume';
import { ResumeImage } from '@/components/myresume/ResumeImage';
import { useCounter } from '@/hooks/useCounter';
import { useFetchFields } from '@/hooks/useFetchFields';
import { Layout } from '@/layout/Layout';
import { useAppSelector } from '@/store';

type Props = HTMLAttributes<unknown>;

export const MyResumeScreen: FC<Props> = () => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const { counter, increment } = useCounter(1);
  const ref = useRef<HTMLElement>(null);
  const { back } = useRouter();
  useFetchFields();

  if (!fields) {
    return (
      <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
        Ищем ваше резюме...
      </Layout>
    );
  }

  return (
    <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
      <div className='flex mt-3'>
        <Button className='ml-auto' onClick={back}>
          Назад
        </Button>
      </div>
      <div className='relative'>
        {counter < 4 && (
          <div className='overflow-hidden fixed -z-10'>
            <div className='absolute top-0 z-10 left-0 w-full h-full bg-[var(--main-color)]'>
              <p>Обрабатываем шаблон резюме...</p>
            </div>
            <Resume ref={ref} />
          </div>
        )}
        <ResumeImage
          trigger={counter}
          condition={counter >= 4}
          resumeRef={ref}
          action={increment}
        />
      </div>
    </Layout>
  );
};
