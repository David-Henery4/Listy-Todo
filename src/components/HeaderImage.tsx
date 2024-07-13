"use client";
import Image from "next/image";
import { bgDesktopLight, bgDesktopDark } from "../../public/images";

const HeaderImage = () => {
  //
  return (
    <div className="w-full absolute top-0 left-0">
      <Image
        quality={100}
        priority={true}
        className="w-full min-h-[200px] max-h-[300px] object-cover object-center hidden dark:block"
        src={bgDesktopDark}
        alt="A well lit city car park corridor at night."
      />
      <Image
        quality={100}
        priority={true}
        className="w-full min-h-[200px] max-h-[300px] object-cover object-center block dark:hidden"
        src={bgDesktopLight}
        alt="A rocky mountain face, with blue skies and light clouds, on a sunny day."
      />
    </div>
  );
};

export default HeaderImage;
