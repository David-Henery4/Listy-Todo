"use client";
import Image from "next/image";
import { bgDesktopLight, bgDesktopDark, bgImageGrainDark, bgImageGrainLight } from "../../public/images";

const HeaderImage = () => {
  //
  return (
    <div className="w-full absolute top-0 left-0">
      <Image
        quality={100}
        priority={true}
        className="w-full min-h-[200px] max-h-[300px] object-cover object-center-top hidden dark:block"
        src={bgImageGrainDark}
        alt="A well lit city car park corridor at night."
      />
      <Image
        quality={100}
        priority={true}
        className="w-full min-h-[200px] max-h-[300px] object-cover object-center-top block dark:hidden"
        src={bgImageGrainLight}
        alt="A rocky mountain face, with blue skies and light clouds, on a sunny day."
      />
    </div>
  );
};

export default HeaderImage;
