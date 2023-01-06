import { FC, HTMLAttributes, useRef } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { Breadcrumbs } from '@/components/common/breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '@/components/common/breadcrumbs/breadcrumb.links';
import { Button } from '@/components/common/ui/Button';
import { Resume } from '@/components/myresume/Resume';
import { useFetchFields } from '@/hooks/useFetchFields';
import { Layout } from '@/layout/Layout';
import { useAppSelector } from '@/store';

type Props = HTMLAttributes<unknown>;

export const MyResumeScreen: FC<Props> = () => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const ref = useRef<HTMLDivElement>(null);
  useFetchFields();

  const downloadPDF = () => {
    ref.current &&
      savePDF(ref.current, {
        fileName: 'resume'
      });
  };

  if (!fields.aboutInfo.secondName) {
    return (
      <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
        <div className='flex my-3'>
          <Breadcrumbs aria-label='breadcrumb' links={breadcrumbLinks} />
        </div>
        ...
      </Layout>
    );
  }

  return (
    <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
      <div className='flex my-3'>
        <Breadcrumbs aria-label='breadcrumb' links={breadcrumbLinks} />
      </div>
      <div className='relative'>
        <Resume ref={ref} />
        <Button className='block mt-3 ml-auto' onClick={downloadPDF}>
          Скачать
        </Button>
      </div>
    </Layout>
  );
};
