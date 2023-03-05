import { GetServerSideProps } from 'next';

import { useFields } from '@/context';
import { ResumeViewScreen } from '@/screens/resume-view/ResumeViewScreen';
import { UserService } from '@/services/user/user.service';
import { AuthEnum } from '@/utils/consts';

const ResumeView = () => {
  const { fields } = useFields();
  return <ResumeViewScreen fields={fields} />;
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
