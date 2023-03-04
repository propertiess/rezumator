import { useRef } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { GetServerSideProps } from 'next';

import { Loader } from '@/components/common/loader';
import { Button } from '@/components/common/ui';
import { Resume, ResumeToImage } from '@/components/myresume';
import { useCounter } from '@/hooks';
import { Layout } from '@/layout';
import { FieldsService } from '@/services/fields';
import { Fields } from '@/types';

type Props = {
  fields: Fields;
};

const ResumeViewById = ({ fields }: Props) => {
  const { counter, increment } = useCounter(0);
  const resume = useRef<HTMLDivElement>(null);

  const isShowResumePreview = counter >= 4;

  const downloadPDF = () => {
    resume.current &&
      fields &&
      savePDF(resume.current, {
        fileName: `Резюме ${fields.aboutInfo.profession} ${fields.aboutInfo.secondName} ${fields.aboutInfo.firstName}`,
      });
  };

  return (
    <Layout title='Резюме'>
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
    </Layout>
  );
};

export default ResumeViewById;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id;

  try {
    const fields = await FieldsService.getById(id! as string);
    return {
      props: {
        fields,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
