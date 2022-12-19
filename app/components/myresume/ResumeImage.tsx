import Image from 'next/image';
import { FC, RefObject, useEffect, useState } from 'react';
import { toPng } from 'html-to-image';
import styles from './Resume.module.css';

interface Props {
  trigger: number;
  condition: boolean;
  action: () => void;
  resumeRef: RefObject<HTMLElement>;
}

export const ResumeImage: FC<Props> = ({
  trigger,
  condition,
  resumeRef,
  action
}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (condition) {
      return;
    }
    toPng(resumeRef.current!).then(url => {
      setImage(url);
      action();
    });
  }, [trigger]);

  return (
    <div className='w-full mx-auto'>
      <Image className={styles.image} src={image} alt='resume' fill />
    </div>
  );
};
