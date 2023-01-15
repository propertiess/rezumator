import { NextPage } from 'next';
import { useRef } from 'react';

import { savePDF } from '@progress/kendo-react-pdf';

import { Breadcrumbs, breadcrumbLinks } from '@/components/common/breadcrumbs';
import { Loader } from '@/components/common/loader';
import { Button } from '@/components/common/ui';
import { Resume, ResumeToImage } from '@/components/myresume';

import { useCounter, useFetchFields } from '@/hooks';

import { useAppSelector } from '@/store';

import { Layout } from '@/layout';

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
      {!isShowResumePreview && <Loader />}
      <ResumeToImage
        trigger={counter}
        condition={isShowResumePreview}
        Component={Resume}
        action={increment}
        ref={resume}
      />
      {isShowResumePreview && (
        <Button className='block mt-3 ml-auto' onClick={downloadPDF}>
          Скачать
        </Button>
      )}
    </Layout>
  );
};

export default MyResume;
