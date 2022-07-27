import Image from "next/image";
import React from "react";

function LargeCard({ image, description, title, buttonText }) {
  return (
    <section className="relative cursor-pointer py-8 ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          alt="small banner"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-24 left-10 space-y-3 sm:top-28 md:left-12 md:top-32">
        <h3 className="w-64 text-4xl md:w-96">{title}</h3>
        <p>{description}</p>
        <button className="rounded-xl bg-gray-800 px-4 py-2 text-sm text-white transition ease-in-out hover:scale-105 active:scale-95 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
