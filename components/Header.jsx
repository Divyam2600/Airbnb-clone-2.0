import React, { useState } from "react";
import {
  GlobeAltIcon,
  MenuAlt2Icon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import AirbnbIcon from "../assets/icons/AirbnbIcon";
import AirbnbLogo from "../assets/icons/AirbnbLogo";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
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
    <>
      <header className=" sticky top-0 z-50 flex grid-cols-3 justify-between space-x-1 border-b bg-white p-4  shadow-md md:px-6">
        {/* Left */}
        <Link href="/">
          <div className="-mb-5 flex h-12 cursor-pointer items-center object-contain ">
            <AirbnbIcon className="h-12 w-12" />
            <AirbnbLogo className="hidden h-10 w-20 md:inline-flex" />
          </div>
        </Link>
        {/* Middle */}
        <div className="flex max-w-xs flex-grow items-center rounded-full border-2 px-2 py-1 shadow-sm md:max-w-sm">
          <input
            type="text"
            className="flex-1 bg-transparent pl-2 text-gray-600 outline-none"
            placeholder={placeholder ? placeholder : "Start your Search..."}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <SearchIcon className="-mr-[2px] ml-3 h-8 w-8 cursor-pointer rounded-full bg-airbnb bg-opacity-75 p-2 text-white hover:bg-opacity-95" />
        </div>
        {/* Right */}
        <div className="flex items-center justify-between space-x-1 text-gray-500 ">
          <p className="hidden cursor-pointer rounded-full py-2 px-5 text-center font-semibold hover:bg-gray-200 hover:bg-opacity-40 md:inline-flex">
            Become A host
          </p>
          <GlobeAltIcon className="mr-1 hidden h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-200 hover:bg-opacity-40 sm:inline-flex" />
          <div
            className="flex cursor-pointer items-center space-x-2 rounded-2xl border p-2 shadow-sm transition ease-in hover:scale-105 hover:shadow-md active:scale-95"
            onClick={() => {
              session && signOut();
            }}
          >
            <MenuAlt2Icon className="h-6 w-6" />
            {session ? (
              <div className="relative h-10 w-10">
                <Image
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
      {searchInput && (
        <div className="z-50 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff385c"]}
            onChange={handleSelect}
            className="sm:mx-auto"
          />
          <div className="flex w-full max-w-lg items-center sm:mx-auto ">
            <h2 className="flex-1 text-3xl font-semibold">No Of Guests</h2>
            <UsersIcon className="h-5 w-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg text-airbnb outline-none"
              value={numberOfGuests}
              min={1}
              onChange={(event) => setNumberOfGuests(event.target.value)}
            />
          </div>
          <div className="my-4 mx-auto flex w-full max-w-lg text-lg font-semibold">
            <button
              onClick={() => {
                setSearchInput("");
                setStartDate(new Date());
                setEndDate(new Date());
                setNumberOfGuests(1);
              }}
              className="flex-1 text-gray-600"
            >
              Cancel
            </button>
            <button className="flex-1 text-airbnb" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
