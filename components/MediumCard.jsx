import Image from "next/image";
import React from "react";

function MediumCard({ image, title }) {
  return (
    <div className="my-2 transform cursor-pointer transition duration-200 ease-in-out hover:scale-105">
      <div className="relative h-48 w-48 md:h-60 md:w-60">
        <Image
          alt="promotion banner"
          src={image}
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
}

export default MediumCard;
