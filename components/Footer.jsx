import { GlobeAltIcon } from "@heroicons/react/outline";
import React from "react";

function Footer() {
  return (
    <footer className="bottom-0 grid-cols-3 space-y-5 divide-y divide-gray-400 divide-opacity-70 bg-gray-200 p-4 child:mx-auto child:max-w-5xl md:grid md:gap-3 md:space-y-0 md:divide-y-0">
      <div>
        <p className="flex-1 text-lg ">Support</p>
        <div className="grid grid-cols-3 space-y-2 text-xs capitalize child:cursor-pointer child-hover:underline md:block">
          <p className="mt-2">AirCover</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Help Center</p>
          <p>Our COVID-19 Response</p>
        </div>
      </div>
      <div>
        <p className="mt-4 flex-1 text-lg md:mt-0">Hosting</p>
        <div className="grid grid-cols-3 space-y-2 text-xs capitalize child:cursor-pointer child-hover:underline md:block">
          <p className="mt-2"> Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>hosting resources</p>
          <p>community forum</p>
          <p>How to host responsibly</p>
        </div>
      </div>
      <div>
        <p className="mt-4 flex-1 text-lg md:mt-0">Airbnb</p>
        <div className="grid grid-cols-3 space-y-2 text-xs capitalize child:cursor-pointer child-hover:underline md:block">
          <p className="mt-2">new features</p>
          <p>Investors</p>
          <p>Careers</p>
          <p>Letter from our founders</p>
          <p>Newsroom</p>
        </div>
      </div>
      <div className="col-span-full hidden h-[1px] w-full bg-gray-400 md:block"></div>
      <div className="col-span-3">
        <div className="mt-4 flex items-center space-x-4 text-xs">
          <GlobeAltIcon className="-mr-2 h-5 w-5" />
          <p>English (EN)</p>
          <div className=" flex list-disc space-x-4 child:cursor-pointer child-hover:underline">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Company details</li>
          </div>
        </div>
        <p className="text-center text-sm">© 2022 Divyam</p>
      </div>
    </footer>
  );
}

export default Footer;
