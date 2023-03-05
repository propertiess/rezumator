import { GetServerSideProps } from 'next';

import { ResumeEditScreen } from '@/screens/resume-edit/ResumeEditScreen';
import { UserService } from '@/services/user/user.service';
import { AuthEnum } from '@/utils/consts';

const ResumeEdit = () => {
  return <ResumeEditScreen />;
};

export default ResumeEdit;

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
        destination: `/resume/edit/${user.fields._id}`,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {},
  };
};
