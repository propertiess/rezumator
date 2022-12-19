import { FC, HTMLAttributes, useRef } from 'react';
import { Loader } from '@/components/common/Loader';
import { Resume } from '@/components/myresume/Resume';
import { ResumeImage } from '@/components/myresume/ResumeImage';
import { useCounter } from '@/hooks/useCounter';
import { useRezumatorFromStorage } from '@/hooks/useRezumatorFromStorage';
import { Layout } from '@/layout/Layout';

type Props = HTMLAttributes<unknown>;

export const MyResumeScreen: FC<Props> = () => {
  useRezumatorFromStorage();
  const ref = useRef<HTMLElement>(null);
  const { counter, increment } = useCounter(1);

  return (
    <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
      <div className='relative'>
        {counter < 4 && (
          <>
            <Loader />
            <Resume ref={ref} />
          </>
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
