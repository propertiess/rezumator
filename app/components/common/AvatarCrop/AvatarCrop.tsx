import dynamic from 'next/dynamic';
import { FC } from 'react';

const AvatarNoSSR = dynamic(() => import('react-avatar-edit'), { ssr: false });

interface Props {
  src?: string;
  onPreviewChange?: (src: string) => void;
}

const AvatarCrop: FC<Props> = ({ src, onPreviewChange }) => {
  const onCrop = async (view: string) => {
    onPreviewChange && onPreviewChange(view);
  };

  return (
    <AvatarNoSSR
      src={src ?? ''}
      width={300}
      height={300}
      imageWidth={300}
      onCrop={onCrop}
      minCropRadius={1}
      borderStyle={{ textDecoration: 'solid' }}
      closeIconColor='transparent'
      exportAsSquare
      exportQuality={1}
    />
  );
};

export { AvatarCrop };
