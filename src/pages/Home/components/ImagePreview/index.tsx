import { Image } from "@chakra-ui/react";

export interface ImagePreviewProps {
  src: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
  return (
    <Image borderRadius="2.25rem" width="5.5rem" height="5.5rem" src={src} />
  );
};

export default ImagePreview;
