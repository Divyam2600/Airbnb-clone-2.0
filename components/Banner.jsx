import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[250px] sm:h-[350px] 2xl:h-[500px]">
      <Image
        src="/banner.webp"
        alt="banner"
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="absolute top-1/2 w-full space-y-1 text-center font-semibold">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button className="rounded-full bg-white px-6 py-2 text-sm text-purple-500 shadow-md transition ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 sm:px-8 sm:py-3 sm:text-base md:text-lg">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
