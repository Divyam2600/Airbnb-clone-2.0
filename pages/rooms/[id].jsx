import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HeartIcon,
  MapIcon,
  StarIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import {
  AnnotationIcon,
  ShieldCheckIcon,
  StarIcon as StarIconFilled,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BedIcon from "../../assets/icons/BedIcon";
import Amenities from "../../components/Amenities";
import { useState } from "react";

function Details() {
  const router = useRouter();
  const {
    id,
    title,
    location,
    image,
    description,
    hostName,
    hostedBy,
    hostReviews,
    hostAbout,
    hostPicture,
    hostSince,
    hostResponseRate,
    guests,
    bedrooms,
    beds,
    bathrooms,
    amenities,
    price,
    star,
    numberOfGuests,
    nights,
    checkIn,
    checkOut,
    cleaningFee,
    searchPlaceholder,
  } = router.query;
  const details = `${guests} ${guests > 1 ? "guests" : "guest"} · ${bedrooms} ${
    bedrooms > 1 ? "bedrooms" : "bedroom"
  } · ${beds} ${beds > 1 ? "beds" : "bed"} · ${bathrooms} ${
    bathrooms > 1 ? "bathrooms" : "bathroom"
  }`;
  const usersGuests = `${numberOfGuests} ${
    numberOfGuests > 1 ? "guests" : "guest"
  }`;
  const [readMore, setReadMore] = useState(false);
  const userNights = `${nights} ${nights > 1 ? "nights" : "night"}`;

  return (
    <div className="h-screen">
      <Header placeholder={searchPlaceholder} />
      <main className="mx-auto max-w-4xl px-2 py-3 xs:px-5">
        <section className="font-semibold">
          {/* Header Section */}
          <p className="text-lg">{title}</p>
          <div className="flex space-x-5">
            <p className="flex-1 cursor-pointer text-xs underline md:text-sm">
              {location}
            </p>
            <p className="flex cursor-pointer items-center text-xs text-gray-700 hover:underline">
              <UploadIcon className="mr-1 h-4 w-4" />
              Share
            </p>
            <p className="flex cursor-pointer items-center text-xs text-gray-700 hover:underline">
              <HeartIcon className="mr-1 h-4 w-4" />
              Save
            </p>
          </div>
          <div className="relative my-4 h-72 w-5/6 rounded-xl bg-black sm:h-80 lg:h-96 ">
            <Image
              alt="place"
              src={image}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer rounded-xl transition duration-200 ease-in-out hover:opacity-80"
            />
          </div>
          {/* Middle Section */}
          <div className="relative flex space-x-2 xs:space-x-5">
            <div className=" space-y-4 divide-y">
              <div className="flex space-x-3 ">
                <div className="flex-1">
                  <p className="text-base md:text-lg">{hostedBy}</p>
                  <p className="text-xs font-normal text-gray-500 md:text-sm">
                    {details}
                  </p>
                </div>
                <div className="relative h-10 w-10 cursor-pointer md:h-12 md:w-12">
                  <Image
                    alt="hostPicture"
                    src={hostPicture}
                    layout="fill"
                    className="rounded-full"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapIcon className="h-7 w-7 text-airbnb xs:h-6 xs:w-6" />
                  <p className="flex flex-col pl-[4px] xs:pl-0 text-xs xs:text-sm">
                    Book Right Now
                    <a className="text-[10px] font-normal leading-4 text-gray-400">
                      This is one of the few places in {location}.
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <StarIcon className="h-5 w-5 text-airbnb" />
                  <p className="flex flex-col text-sm">
                    Rating
                    <a className="text-[10px] font-normal leading-4 text-gray-400">
                      {star * 20}% visitors have rated this place.
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <BadgeCheckIcon className="h-5 w-5 text-airbnb" />
                  <p className="flex flex-col text-sm">
                    Experienced host
                    <a className="text-[10px] font-normal leading-4 text-gray-400">
                      {hostName} has {parseInt(hostReviews, 10) + 100} reviews
                      for other places.
                    </a>
                  </p>
                </div>
              </div>
              <div className="space-y-3 pt-4 pb-1">
                <div className="relative h-5 w-24">
                  <Image alt="promotion" src="/promotion.webp" layout="fill" />
                </div>
                <p className="text-xs font-normal">
                  Every booking includes free protection from Host
                  cancellations, listing inaccuracies, and other issues like
                  trouble checking in.
                </p>
              </div>
              <div>
                <p
                  className={`pt-4 text-xs font-normal ${
                    !readMore && "line-clamp-6"
                  } `}
                >
                  {description}.
                </p>
                <span
                  className="mt-2 flex cursor-pointer items-center text-xs font-normal underline"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? (
                    <>
                      View Less <ChevronUpIcon className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </>
                  )}
                </span>
              </div>
              <div className="space-y-4 pt-5 pb-2">
                <p className="text-lg">Where you&#39;ll sleep?</p>
                <div className="w-40 space-y-1 rounded-xl border border-gray-400 border-opacity-80 p-5 text-xs">
                  <BedIcon className="mb-2 h-6 w-6 text-airbnb" />
                  Bedroom
                  <p className="font-normal">
                    {beds} king {beds > 1 ? "beds" : "bed"}
                  </p>
                </div>
              </div>
              <Amenities amenities={amenities} />
              <div className="space-y-5 pt-5 pb-3">
                <div className="flex space-x-2 xs:space-x-4">
                  <div className="relative h-8 w-11 cursor-pointer md:h-12 md:w-12 xs:h-11">
                    <Image
                      alt="hostPicture"
                      src={hostPicture}
                      layout="fill"
                      className="rounded-full"
                      objectFit="cover"
                    />
                  </div>
                  <a>
                    Hosted by {hostName}
                    <p className="text-xs font-normal">{hostSince}</p>
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-xs font-normal">
                    <StarIconFilled className="mr-1 h-5 w-5 text-airbnb" />
                    {parseInt(hostReviews, 10) + 100} Reviews
                  </p>
                  <p className="flex items-center text-xs font-normal">
                    <ShieldCheckIcon className="mr-1 h-5 w-5 text-airbnb" />
                    Identity Verified
                  </p>
                  <p className="flex items-center text-xs font-normal">
                    <AnnotationIcon className="mr-1 h-5 w-5 text-airbnb" />
                    {hostResponseRate}% Response Rate
                  </p>
                </div>
                {hostAbout?.trim() != "" && (
                  <p className="text-xs font-normal line-clamp-6">
                    {hostAbout}
                  </p>
                )}
                <p className="text-xs font-normal">
                  During your stay,
                  <br />I won&#39;t be available in person but can be contacted
                  through Airbnb messages and calls.
                </p>
              </div>
            </div>
            {/* Side Price Table */}
            <div className="sticky top-24 mb-3 h-max space-y-5 rounded-xl border px-4 py-5 shadow-md">
              <a className="flex items-center text-2xl">
                ${price}{" "}
                <p className="mt-1 pl-1 text-xs text-gray-500">night</p>
              </a>
              <div className="w-36 space-y-2 divide-y divide-gray-500 rounded-xl border border-gray-500 py-2 text-[8px] sm:w-52">
                <div className="flex justify-between space-x-2 divide-x divide-gray-500 px-2 text-left child:w-full child:cursor-pointer">
                  <a>
                    CHECK-IN <p className="text-gray-500">{checkIn}</p>
                  </a>
                  <a className="pl-2">
                    CHECK-OUT <p className="text-gray-500">{checkOut}</p>
                  </a>
                </div>
                <div className="flex px-2 pt-2 child:cursor-pointer">
                  <a className="flex-1">
                    GUESTS{" "}
                    <p className="ml-[1px] text-gray-500">{usersGuests}</p>
                  </a>
                  <ChevronDownIcon className="h-4 w-4" />
                </div>
              </div>
              <button
                className={`w-full rounded-md bg-airbnb py-2 text-xs text-white transition ease-in-out hover:scale-105 active:scale-95 ${
                  nights < 1 &&
                  "cursor-not-allowed bg-opacity-40 hover:scale-100 active:scale-100"
                }`}
                disabled={nights < 1 && true}
              >
                Book Now
              </button>
              <div className="space-y-2">
                <a className="flex justify-between text-xs font-normal">
                  <p className="text-gray-600 underline">
                    ${price} x {userNights}
                  </p>
                  <p> ${price * nights}</p>
                </a>
                <a className="flex justify-between text-xs font-normal">
                  <p className="text-gray-600 underline">Service Fee</p>
                  <p> ${nights > 1 ? cleaningFee : 0}</p>
                </a>
              </div>
              <div className="flex justify-between border-t pt-4 text-xs font-normal">
                <p className="text-gray-600 underline">Total Amount</p>
                <p>
                  {" "}
                  ${price * nights + (nights > 1 && parseInt(cleaningFee))}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Details;
