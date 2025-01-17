import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type BannerArgs = {
  imageSource: StaticImageData;
  secondImageSource: StaticImageData;
  alt: string;
  secondAlt: string;
  titleText: string;
  descriptionText: string;
  reverse?: boolean;
};

export const FeatureBanner = (props) => {
  let {
    imageSource,
    secondImageSource,
    secondAlt,
    alt,
    titleText,
    descriptionText,
    reverse = false,
  }: BannerArgs = props;
  let outerStyle = !reverse
    ? "flex relative flex-col md:flex-row z-30 w-[100%] shadow-lg"
    : "flex relative flex-col md:flex-row-reverse z-30 w-[100%] shadow-lg";
  let innerStyle = !reverse
    ? "relative justify-end flex gap-1 md:flex-row"
    : "relative justify-end flex gap-1 md:flex-row-reverse";

  return (
    <div className={outerStyle}>
      <Image
        src={imageSource}
        alt={alt}
        className="md:w-[35%]"
        priority={true}
        sizes="100vw"
      />
      <div className={innerStyle}>
        <div className="flex flex-col my-auto gap-5 md:pl-10 p-10">
          <p className="text-lg font-bold cursor-default">{titleText}</p>
          <p className="cursor-default">{descriptionText}</p>
        </div>
        <Image
          src={secondImageSource}
          alt={secondAlt}
          className="hidden md:block md:w-[30%] md:h-auto"
          priority={true}
          sizes="100vw"
        />
      </div>
    </div>
  );
};
