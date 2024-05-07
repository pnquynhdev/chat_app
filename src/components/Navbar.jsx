import React from "react";

function Navbar() {
  return (
    <div className="flex">
      <div className="mt-3 ml-3 hover:text-neutral-500">
        <a href="#" className="flex flex-col">
          <div className="flex justify-center">
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"></path>
          </svg></div>
          <h1 className="font-medium text-xl text-neutral-200 hover:text-neutral-500 mt-2">ChatApp</h1>
        </a>
      </div>

      <div className="flex-1 relative mr-5 mt-5">
        <div className="absolute top-0 right-0 ">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <button className="inline-block">
                <a
                  className="py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                  href="#"
                >
                  Sign In
                </a>
              </button>
            </div>
            <div>
              <button className="inline-block">
                <a
                  className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                  href="#"
                >
                  Sign up
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
