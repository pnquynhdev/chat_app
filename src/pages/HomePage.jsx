import React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row mt-64">
        <div className="basis-3/4 grid grid-cols-12">
          <div className=" flex flex-col col-start-3 col-span-11">
            <div className="flex flex-col">
              <h1 className="text-gray-100 font-midium text-5xl sm:text-6xl font-bold flex-grow">Share the world with your friends</h1>
              <p className="text-gray-300 mt-4 text-3xl flex-grow">Chat app lets you connect with the world</p>
            </div>
            <div className="flex mt-24 gap-6">
              <form action="/">
                <div className="relative flex justify-items-stretch w-full">
                  <input
                    type="text"
                    placeholder="Email address"
                    aria-label="Email address"
                    aria-describedby="btn-email-submit"
                    className="px-6 relative m-0 flex-auto rounded-s border-2 border-blue-500 font-medium text-xl bg-transparent bg-clip-padding leading-[1.6] outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 "
                  />
                  <button
                    id="btn-email-submit"
                    className="px-6 z-20 inline-block rounded-e bg-blue-500 shadowtext-xl text-white font-medium leading-normal transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg active:bg-blue-900"
                    type="button"
                  >
                    Sign up for ChatApp
                  </button>
                </div>
              </form>
              <button
                className="inline-block rounded-md border-2 outline-none border-blue-400 bg-slate-200 px-6  transition duration-150 ease-in-out hover:border-blue-300 hover:bg-blue-300 active:bg-cyan-700"
                type="button"
              >
                <div className="flex items-center gap-2 text-black text-xl font-medium leading-normal">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;