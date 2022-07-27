import React, { useState } from "react";
import {
  GlobeAltIcon,
  LogoutIcon,
  MenuAlt2Icon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import AirbnbIcon from "../assets/icons/AirbnbIcon";
import AirbnbLogo from "../assets/icons/AirbnbLogo";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  function search() {
    setSearchInput("");
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  }
  const { data: session } = useSession();
  return (
    <div>
      <header className=" sticky top-0 z-50 flex grid-cols-3 justify-between space-x-1 border-b bg-white p-4  shadow-md md:px-6">
        {/* Left */}
        <Link href="/">
          <div
            className={`-mb-5 -ml-3 flex h-12 cursor-pointer items-center object-contain xs:-ml-0 ${
              session && "child:mt-3"
            } `}
          >
            <AirbnbIcon className="h-16 w-16" />
            <AirbnbLogo className="hidden h-10 w-28 md:inline-flex" />
          </div>
        </Link>
        {/* Middle */}
        <div className="my-auto flex h-12 max-w-[180px] flex-grow items-center rounded-full border-2 px-2 shadow-sm md:max-w-sm xs:max-w-sm">
          <input
            type="text"
            className="flex-1 truncate bg-transparent pl-2 text-gray-600 outline-none"
            placeholder={
              placeholder ? placeholder : "Enter a City or Country..."
            }
            disabled={!session && true}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <SearchIcon className="-mr-[2px] ml-3 h-9 w-9 cursor-pointer rounded-full bg-airbnb bg-opacity-75 p-2 text-white hover:bg-opacity-95" />
        </div>
        {/* Right */}
        <div className="flex items-center justify-between space-x-1 text-gray-500 ">
          <p className="hidden cursor-pointer rounded-full py-2 px-4 text-center font-semibold hover:bg-gray-200 hover:bg-opacity-40 lg:inline-flex">
            Become A host
          </p>
          <GlobeAltIcon className="mr-1 hidden h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-200 hover:bg-opacity-40 sm:inline-flex" />
          <div
            className="flex cursor-pointer items-center space-x-2 rounded-2xl border p-2 shadow-sm transition ease-in-out hover:scale-105 hover:shadow-md active:scale-95"
            onClick={() => {
              session && setActive(!active);
            }}
          >
            <MenuAlt2Icon className="h-6 w-6" />
            {session ? (
              <div className="relative h-10 w-10">
                <Image
                  alt="userImage"
                  src={session.user.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            ) : (
              <UserCircleIcon className="h-8 w-8" />
            )}
          </div>
        </div>
      </header>
      {active && (
        <div className="relative z-[60]">
          <p
            className="fixed right-4 -mt-2 flex cursor-pointer items-center rounded-lg border-2 bg-white px-5 py-2 text-lg font-semibold text-gray-700 shadow-md transition duration-300 ease-in-out hover:scale-105 active:scale-95 "
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                signOut();
              }, 1000);
            }}
          >
            <LogoutIcon className="mr-2 -mt-[2px] h-7 w-7 text-airbnb" />
            {loading ? "Logging Out..." : "Logout"}
          </p>
        </div>
      )}
      {searchInput && (
        <div className="z-50 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff385c"]}
            onChange={handleSelect}
            className="sm:mx-auto "
          />
          <div className="mx-auto flex w-full max-w-lg items-center justify-evenly space-x-28">
            <h2 className="text-xl font-semibold sm:text-3xl xs:text-2xl">
              No Of Guests
            </h2>
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-7 w-7 text-gray-400" />
              <MinusCircleIcon
                className="guest-input-button"
                onClick={() =>
                  numberOfGuests > 1 && setNumberOfGuests(numberOfGuests - 1)
                }
              />
              <input
                type="number"
                className="max-w-[32px] text-center text-2xl text-airbnb outline-none"
                value={numberOfGuests}
                min={1}
                onChange={(event) => setNumberOfGuests(event.target.value)}
              />
              <PlusCircleIcon
                className="guest-input-button"
                onClick={() => setNumberOfGuests(numberOfGuests + 1)}
              />
            </div>
          </div>
          <div className="space-x- my-4 mx-auto flex w-full max-w-lg select-none justify-evenly text-lg font-semibold child:w-1/3 child:rounded-md child:py-1 child:shadow-sm child:transition child:duration-200 child:ease-in-out child-hover:scale-105 child-active:scale-95">
            <button
              onClick={() => {
                setSearchInput("");
                setStartDate(new Date());
                setEndDate(new Date());
                setNumberOfGuests(1);
              }}
              className="border-2 border-gray-600 border-opacity-50 text-gray-600 "
            >
              Cancel
            </button>
            <button
              className="bg-airbnb bg-opacity-90 text-white hover:bg-opacity-100 "
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
