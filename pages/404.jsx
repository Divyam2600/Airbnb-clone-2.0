import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/outline";
import Head from "next/head";

function Custom404() {
  return (
    <div>
      <Head>
        <title>Not-Found: Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="mx-auto max-w-lg px-5 pb-4">
        <div className="w-full text-center md:text-left">
          <Image
            alt="error"
            src="/error.png"
            height={300}
            width={500}
            objectFit="cover"
          />
        </div>
        <div className="space-y-3">
          <p className="-mt-4 -mb-1 text-center text-8xl font-bold text-gray-700">
            OOPS!!
          </p>
          <p className="text-center text-xl font-semibold">
            The link you followed may be broken, or the page may have been
            removed.
          </p>
          <Link href={"/"}>
            <p className=" mx-auto flex max-w-max cursor-pointer items-center rounded-lg border-2 border-airbnb py-2 px-8 text-lg font-semibold text-airbnb decoration-transparent transition duration-200 ease-in-out hover:scale-105 hover:bg-airbnb hover:text-white active:scale-95">
              <HomeIcon className="mr-2 h-7 w-7" />
              Return to Homepage...
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Custom404;
