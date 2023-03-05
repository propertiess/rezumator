import { useRef } from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { GetServerSideProps, NextPage } from 'next';

import { breadcrumbLinks, Breadcrumbs } from '@/components/common/breadcrumbs';
import { Loader } from '@/components/common/loader';
import { Button } from '@/components/common/ui';
import { Resume, ResumeToImage } from '@/components/myresume';
import { useFields } from '@/context';
import { useCounter } from '@/hooks';
import { Layout } from '@/layout';
import { UserService } from '@/services/user/user.service';
import { AuthEnum } from '@/utils/consts';

const ResumeView: NextPage = () => {
  const { fields } = useFields();
  const { counter, increment } = useCounter(0);
  const resume = useRef<HTMLDivElement>(null);

  const isShowResumePreview = counter >= 4;

  const downloadPDF = () => {
    resume.current &&
      savePDF(resume.current, {
        fileName: `Резюме ${fields.aboutInfo.profession} ${fields.aboutInfo.secondName} ${fields.aboutInfo.firstName}`,
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
        fields={fields}
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

export default ResumeView;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const token = ctx.req.cookies[AuthEnum.AUTH_TOKEN];

  if (!token) {
    return {
      props: {},
    };
  }

  try {
    const user = await UserService.getById(token);
    return {
      props: {},
      redirect: {
        destination: `/resume/view/${user.fields._id}`,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {},
  };
};
