import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartFilledIcon } from "@heroicons/react/solid";

import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function InfoCard({
  id,
  image,
  description,
  title,
  star,
  price,
  location,
  guests,
  bedrooms,
  bathrooms,
  beds,
  amenities,
  nights,
  checkIn,
  checkOut,
  hostName,
  hostedBy,
  hostReviews,
  hostAbout,
  hostResponseRate,
  hostPicture,
  hostSince,
  cleaningFee,
  numberOfGuests,
  searchPlaceholder,
}) {
  const details = `${guests} ${guests > 1 ? "guests" : "guest"} · ${bedrooms} ${
    bedrooms > 1 ? "bedrooms" : "bedroom"
  } · ${beds} ${beds > 1 ? "beds" : "bed"} · ${bathrooms} ${
    bathrooms > 1 ? "bathrooms" : "bathroom"
  } · ${amenities
    ?.split(",")
    .slice(...(amenities.length > 6 ? [0, 6] : [0, amenities.length]))
    .join(" · ")} `;
  const [active, setActive] = useState(false);
  const router = useRouter();
  function navigate() {
    router.push({
      pathname: "/rooms/[id]",
      query: {
        id: id,
        title,
        location,
        image,
        description,
        hostName,
        hostedBy,
        hostReviews,
        hostAbout: hostAbout,
        hostPicture,
        hostSince,
        hostResponseRate: hostResponseRate ? hostResponseRate : "92",
        guests,
        bedrooms,
        beds,
        bathrooms,
        amenities,
        price,
        star: star ? star : "4.4",
        numberOfGuests,
        nights,
        checkIn,
        checkOut,
        cleaningFee: cleaningFee ? cleaningFee : "0",
        searchPlaceholder,
      },
    });
  }
  return (
    <div className="flex cursor-pointer rounded-xl border border-b border-gray-100 py-5 px-4 shadow-sm transition duration-200 ease-in-out hover:border-l-4 hover:border-l-airbnb hover:opacity-80 hover:shadow-md">
      <div className="relative h-24 w-40 flex-shrink-0 transition duration-200 ease-in-out hover:scale-105 md:h-60 md:w-80">
        <Image
          alt="Place"
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          loading="lazy"
        />
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400 sm:text-sm">{location}</p>
          <p onClick={() => setActive(!active)}>
            {active ? (
              <HeartFilledIcon className="h-5 w-5 cursor-pointer text-airbnb transition duration-75 ease-in-out hover:scale-125 active:scale-75 sm:h-7 sm:w-7" />
            ) : (
              <HeartIcon className="h-5 w-5 cursor-pointer text-airbnb transition duration-75 ease-in-out hover:scale-125 active:scale-75 sm:h-7 sm:w-7" />
            )}
          </p>
        </div>
        <h4 className="text-sm font-semibold capitalize sm:text-base">
          {title}
        </h4>
        <div className="w-10 border-b pt-2"></div>
        <p className="flex-grow pt-2 text-xs capitalize text-gray-500">
          {details}
        </p>
        <button
          className="mt-3 -mb-2 flex w-32 rounded-xl border-2 border-airbnb px-4 py-2 font-semibold text-gray-700 transition  duration-100 ease-in-out hover:scale-105 hover:bg-airbnb hover:text-white active:scale-95"
          onClick={navigate}
        >
          Read more...
        </button>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="mr-1 h-5 w-5 text-orange-500" />
            {star ? star : "4.4"}
          </p>
          <div className="">
            <p className="text-lg xs:text-xl -ml-2 xs:-ml-0 font-semibold lg:text-2xl">
              ${price} / night
            </p>
            <p className="text-right font-extralight">
              ${price * nights} - total
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
