import { useRef } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { NextPage } from 'next';

import { breadcrumbLinks, Breadcrumbs } from '@/components/common/breadcrumbs';
import { Loader } from '@/components/common/loader';
import { Button } from '@/components/common/ui';
import { Resume, ResumeToImage } from '@/components/myresume';
import { useCounter, useFetchFields } from '@/hooks';
import { Layout } from '@/layout';
import { useAppSelector } from '@/store';

const MyResume: NextPage = () => {
  const fields = useAppSelector(state => state.rezumator.fields);
  const { counter, increment } = useCounter(0);
  const resume = useRef<HTMLDivElement>(null);
  useFetchFields();

  const isShowResumePreview = counter >= 4;

  const downloadPDF = () => {
    resume.current &&
      savePDF(resume.current, {
        fileName: `Резюме ${fields.aboutInfo.profession} ${fields.aboutInfo.secondName} ${fields.aboutInfo.firstName}`
      });
  };

  if (!fields.aboutInfo.secondName) {
    return (
      <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
        <div className='my-3 flex'>
          <Breadcrumbs aria-label='breadcrumb' links={breadcrumbLinks} />
        </div>
        ...
      </Layout>
    );
  }

  return (
    <Layout title='Моё резюме' description='Самое лучшее резюме на планете!'>
      <div className='my-3 flex'>
        <Breadcrumbs aria-label='breadcrumb' links={breadcrumbLinks} />
      </div>
      {!isShowResumePreview && <Loader />}
      <ResumeToImage
        trigger={counter}
        condition={isShowResumePreview}
        Component={Resume}
        action={increment}
        ref={resume}
      />
      {isShowResumePreview && (
        <Button className='mt-3 ml-auto block' onClick={downloadPDF}>
          Скачать
        </Button>
      )}
    </Layout>
  );
};

export default MyResume;
