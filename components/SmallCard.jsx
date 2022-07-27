import Image from "next/image";
import React from "react";

function SmallCard({ image, distance, location }) {
  return (
    <div className=" xs:m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl transition ease-in-out hover:scale-105 hover:bg-gray-100 hover:bg-opacity-90">
      <div className="relative h-16 w-16">
        <Image
          alt="promotion"
          src={image}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="text-sm font-semibold sm:text-base">
        <h2>{location}</h2>
        <h3 className="text-gray-400">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
