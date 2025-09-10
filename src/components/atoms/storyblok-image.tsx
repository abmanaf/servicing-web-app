import Image from "next/image";
import { StoryblokAsset } from "@/types";

interface StoryblokImageProps {
  image: StoryblokAsset;
  preserveAspectRatio?: boolean;
  className?: string;
  width?: number;
  height?: number;
  fallback?: React.ReactNode;
}

const ImageAspectRatio = ({
  image,
  preserveAspectRatio = true,
  className = "",
  width = 600,
  height = 600,
  fallback,
}: StoryblokImageProps) => {
  if (!image?.filename) return fallback;

  return (
    <Image
      src={image.filename}
      alt={image.alt || "Image"}
      width={width}
      height={height}
      className={
        preserveAspectRatio
          ? `aspect-auto rounded-lg ${className}`
          : `aspect-square object-cover rounded-lg ${className}`
      }
      style={preserveAspectRatio ? {} : { aspectRatio: "1/1" }}
    />
  );
};

export default ImageAspectRatio;
