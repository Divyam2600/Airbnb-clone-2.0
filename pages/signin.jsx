import React from "react";
import Header from "../components/Header";
import { signIn } from "next-auth/react";
import AirbnbIcon from "../assets/icons/AirbnbIcon";
import AirbnbLogo from "../assets/icons/AirbnbLogo";
import GoogleIcon from "../assets/icons/GoogleIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";

function SignIn({ providers }) {
  return (
    <div>
      <Header />
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="-mt-20 space-y-4 rounded-xl border bg-white p-10 shadow-md">
          <AirbnbIcon className="mx-auto -mt-3 aspect-square h-20" />
          <p className="flex w-full items-center justify-center space-x-4 text-2xl font-semibold">
            Login To <AirbnbLogo className="-mt-2 ml-2 aspect-video h-12" />
          </p>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className={`flex w-full items-center space-x-2 rounded-lg border-2 py-2 px-4 font-semibold  transition duration-200 ease-in-out hover:scale-105 active:scale-95 ${
                  provider.name === "Google"
                    ? "border-green-500"
                    : provider.name === "Facebook"
                    ? "border-blue-700"
                    : provider.name === "GitHub"
                    ? "border-gray-700"
                    : "border-sky-400"
                }`}
              >
                {provider.name === "Google" ? (
                  <GoogleIcon className="h-8 w-8" />
                ) : provider.name === "Facebook" ? (
                  <FacebookIcon className="h-8 w-8" />
                ) : provider.name === "GitHub" ? (
                  <GitHubIcon className="h-8 w-8" />
                ) : (
                  <TwitterIcon className="h-8 w-8" />
                )}
                <p>
                  Sign in with{" "}
                  {provider.name === "Twitter (Legacy)"
                    ? provider.name.split(" ").slice(0, 1)
                    : provider.name}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import { getProviders } from "next-auth/react";
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
