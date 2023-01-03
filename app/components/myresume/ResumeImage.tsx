import Image from 'next/image';
import { FC, RefObject, useEffect, useState } from 'react';
import { toPng } from 'html-to-image';

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
    <div className='w-full flex justify-center mx-auto mt-3 relative'>
      {condition && (
        <Image
          className='image'
          src={image}
          alt='resume'
          width={700}
          height={700}
        />
      )}
    </div>
  );
};
