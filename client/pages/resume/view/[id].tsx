import { GetServerSideProps } from 'next';

import { ResumeViewScreen } from '@/screens/resume-view/ResumeViewScreen';
import { FieldsService } from '@/services/fields';
import { ResumeProps } from '@/types';

const ResumeViewById = ({ fields }: Required<ResumeProps>) => {
  return <ResumeViewScreen fields={fields} />;
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
