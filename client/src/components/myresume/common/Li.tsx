import { FC } from 'react';

interface Props {
  title: string;
  content: string | boolean;
}

const styles = 'grid grid-cols-2 items-center gap-5 mt-2';

const Li: FC<Props> = ({ title, content }) => {
  if (!content) {
    return null;
  }

  if (typeof content === 'boolean') {
    return (
      <li className={styles}>
        <span>{title}</span>
      </li>
    );
  }
  if (!title) {
    return (
      <li className={styles}>
        <span>{content}</span>
      </li>
    );
  }

  return (
    <li className={styles}>
      <span className='text-[18px] text-gray-300'>{title}</span>
      <span className='font-bold'>{content}</span>
    </li>
  );
};

export { Li };
