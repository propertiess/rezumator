import {
  forwardRef,
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import { toPng } from 'html-to-image';
import Image from 'next/image';

import { Fields } from '@/types';

import { ResumeProps } from './Resume';

interface Props {
  trigger: number;
  condition: boolean;
  action: () => void;
  fields: Fields;
  Component: ForwardRefExoticComponent<
    ResumeProps & RefAttributes<HTMLDivElement>
  >;
}

export const ResumeToImage = forwardRef<HTMLDivElement, Props>(
  function ResumeToImage(
    { trigger, condition, Component, action, fields },
    ref
  ) {
    const [image, setImage] = useState('');
    const resumeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (condition) {
        return;
      }

      resumeRef.current &&
        toPng(resumeRef.current).then(url => {
          setImage(url);
          action();
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    return (
      <div className='relative mx-auto flex w-full justify-center overflow-hidden'>
        <div className='absolute top-0 left-0 h-full w-full bg-[var(--main-color)]'></div>
        {condition && (
          <div className='relative'>
            <Image className='image' src={image} alt='resume' fill />
          </div>
        )}
        <Component
          fields={fields}
          ref={(el: HTMLDivElement) => {
            resumeRef.current = el;
            (ref as MutableRefObject<HTMLDivElement | null>).current = el;
          }}
        />
      </div>
    );
  }
);
