import { useEffect, useRef, useState } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Loader } from '@/components/common/loader';
import { Button } from '@/components/common/ui';
import { Resume, ResumeToImage } from '@/components/myresume';
import { useCounter } from '@/hooks';
import { Layout } from '@/layout';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

const ResumeViewById: NextPage = () => {
  const [fields, setFields] = useState<Fields | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();
  const { counter, increment } = useCounter(0);
  const resume = useRef<HTMLDivElement>(null);

  const isShowResumePreview = counter >= 4;

  const downloadPDF = () => {
    resume.current &&
      fields &&
      savePDF(resume.current, {
        fileName: `Резюме ${fields.aboutInfo.profession} ${fields.aboutInfo.secondName} ${fields.aboutInfo.firstName}`
      });
  };

  useEffect(() => {
    if (!query.id) {
      return;
    }

    const fetchFields = async () => {
      try {
        setIsLoading(true);
        const data = await FieldsService.getById(query.id as string);
        setFields(data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };

    fetchFields();
  }, [query.id]);

  return (
    <Layout title='Резюме'>
      {!isLoading ? (
        <>
          {!isShowResumePreview && <Loader />}
          <ResumeToImage
            fields={fields!}
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
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ResumeViewById;
