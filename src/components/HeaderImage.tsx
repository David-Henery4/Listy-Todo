"use client";
import Image, {StaticImageData} from "next/image";
import {
  bgDesktopLight,
  bgDesktopDark,
} from "../../public/images";
import { useTheme } from "next-themes";

interface ImgData {
  img: string | StaticImageData;
  alt: string;
}

const HeaderImage = () => {
  const { resolvedTheme } = useTheme();
  //
  const handleImgThemeAndAlt = (): ImgData => {
    if (resolvedTheme === "dark"){
      return {
        img: bgDesktopDark,
        alt: "A well lit city car park corridor at night.",
      };
    }
    return {
      img: bgDesktopLight,
      alt: "Light mode header background image of a rocky mountain face."
    }
  };
  //
  return (
    <div className="w-full absolute top-0 left-0">
      <Image
        quality={100}
        priority={true}
        className="w-full min-h-[200px] max-h-[300px] object-cover object-center"
        src={handleImgThemeAndAlt().img}
        alt={handleImgThemeAndAlt().alt}
      />
    </div>
  );
};

export default HeaderImage;
