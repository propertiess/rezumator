import { GetServerSideProps } from 'next';

import { ResumeEditScreen } from '@/screens/resume-edit/ResumeEditScreen';
import { FieldsService } from '@/services/fields';
import { UserService } from '@/services/user/user.service';
import { ResumeProps } from '@/types';
import { AuthEnum } from '@/utils/consts';

const ResumeEditById = ({ fields }: ResumeProps) => {
  return <ResumeEditScreen fields={fields} />;
};

export default ResumeEditById;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id;
  const token = ctx.req.cookies[AuthEnum.AUTH_TOKEN];

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: '/access-denied',
      },
    };
  }

  const user = await UserService.getById(token);

  if (user.fields._id !== id) {
    return {
      props: {},
      redirect: {
        destination: '/access-denied',
      },
    };
  }

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
