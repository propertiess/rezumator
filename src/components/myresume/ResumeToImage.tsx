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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    return (
      <div className='w-full flex justify-center mx-auto relative overflow-hidden'>
        <div className='bg-[var(--main-color)] absolute top-0 left-0 w-full h-full'></div>
        {condition && (
          <div className='relative'>
            <Image className='image' src={image} alt='resume' fill />
          </div>
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
