import { useRouter } from 'next/router';
import { FC, HTMLAttributes, useRef } from 'react';
import { Loader } from '@/components/common/Loader';
import { Button } from '@/components/common/ui/Button';
import { Resume } from '@/components/myresume/Resume';
import { ResumeImage } from '@/components/myresume/ResumeImage';
import { useCounter } from '@/hooks/useCounter';
import { useFetchFields } from '@/hooks/useFetchFields';
import { Layout } from '@/layout/Layout';

type Props = HTMLAttributes<unknown>;

export const MyResumeScreen: FC<Props> = () => {
  useFetchFields();
  const ref = useRef<HTMLElement>(null);
  const { counter, increment } = useCounter(1);
  const { back } = useRouter();

  return (
    <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
      <div className='flex mt-3'>
        <Button className='ml-auto' onClick={back}>
          Назад
        </Button>
      </div>
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
