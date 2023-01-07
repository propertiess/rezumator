import Image from 'next/image';
import {
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react';
import { toPng } from 'html-to-image';

interface Props {
  trigger: number;
  condition: boolean;
  action: () => void;
  Component: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
}

export const ResumeToImage = forwardRef<HTMLDivElement, Props>(
  function ResumeToImage({ trigger, condition, Component, action }, ref) {
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
    }, [trigger]);

    return (
      <div className='w-full flex justify-center mx-auto relative overflow-hidden'>
        <div className='bg-[var(--main-color)] absolute top-0 left-0 w-full h-full'></div>
        {condition && (
          <Image
            className='image'
            src={image}
            alt='resume'
            width={700}
            height={700}
          />
        )}
        <Component
          ref={(el: HTMLDivElement) => {
            resumeRef.current = el;
            (ref as MutableRefObject<HTMLDivElement | null>).current = el;
          }}
        />
      </div>
    );
  }
);
