import Image from 'next/image';
import { RefObject, forwardRef, useEffect, useState } from 'react';
import { toPng } from 'html-to-image';

interface Props {
  trigger: number;
  condition: boolean;
  action: () => void;
  resumeRef: RefObject<HTMLElement>;
}

export const ResumeImage = forwardRef<HTMLImageElement, Props>(
  function ResumeImage({ trigger, condition, resumeRef, action }, ref) {
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
      <div className='w-full flex justify-center items-start mx-auto relative'>
        {condition && (
          <Image
            className='image'
            src={image}
            ref={ref}
            alt='resume'
            width={700}
            height={700}
          />
        )}
      </div>
    );
  }
);
