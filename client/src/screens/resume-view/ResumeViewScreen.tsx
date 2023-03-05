import { useEffect, useRef } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { useRouter } from 'next/router';

import { Button } from '@/components/ui';
import { Layout } from '@/layout';
import { Resume } from '@/screens/resume-view/resume-item/Resume';
import { ResumeProps } from '@/types';

export const ResumeViewScreen = ({ fields }: Required<ResumeProps>) => {
  const resume = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const downloadPDF = () => {
    resume.current &&
      savePDF(resume.current, {
        fileName: `Резюме ${fields?.aboutInfo.profession} ${fields?.aboutInfo.secondName} ${fields?.aboutInfo.firstName}`,
      });
  };

  useEffect(() => {
    if (fields.aboutInfo.secondName) {
      return;
    }

    router.push('/resume/edit');
  }, []);

  return (
    <Layout
      title={`Резюме ${
        fields?.aboutInfo?.secondName
          ? `${fields.aboutInfo.secondName} ${fields.aboutInfo.firstName}`
          : ''
      }`}
    >
      <Resume fields={fields} ref={resume} />
      <Button className='mt-3 ml-auto block' onClick={downloadPDF}>
        Скачать
      </Button>
    </Layout>
  );
};
