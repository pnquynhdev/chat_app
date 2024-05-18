import React from "react";
import Logo from "../components/Logo";

function HomePage() {
  return (
    <div className="md:max-2xl:flex mx-auto">
      <div className="relative">
        <Logo />
        <div className="flex-1 absolute top-5 right-5 md:top-8 md:right-8">
          <button className="inline-block mr-5 md:mr-5">
            <a
              className="py-1 px-6 bg-gray-50 hover:bg-gray-200  text-sm md:text-xl  text-gray-900 font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign In
            </a>
          </button>

          <button className="inline-block">
            <a
              className="py-1 px-6 bg-blue-500 hover:bg-blue-600 text-sm md:text-xl text-white font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign up
            </a>
          </button>
        </div>
      </div>

      <div className="flex flex-col m-24 md:m-32 ">
        <h1 className="text-gray-100 text-3xl md:text-5xl font-extrabold">
          Share the world with your friends
        </h1>
        <p className="text-gray-300 mt-3 text-2xl md:text-3xl">
          Chat app lets you connect with the world
        </p>
        <div className="md:flex-row md:flex flex-col mt-12">
          <div className="md:mt-6">
            <form action="/" className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="btn-email-submit"
                className=" px-2 md:rounded-r-none rounded-md border-2 border-blue-500 font-medium md:text-2xl text-xl bg-transparent bg-clip-padding leading-normal outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 "
              />
              <button
                id="btn-email-submit"
                className="text-nowrap mt-2 md:mt-0 px-2 inline-block rounded-md md:text-2xl text-xl md:rounded-l-none border-2 border-blue-500 bg-blue-500 text-white font-medium leading-normal transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg active:bg-blue-900 active:border-blue-900"
                type="button"
              >
                Sign up for ChatApp
              </button>
            </form>
          </div>
          <button
            className="md:w-36 md:ml-6 w-full text-nowrap flex justify-center items-center gap-2 mt-6 text-black text-xl md:text-2xl font-medium rounded-md border-2 outline-none border-blue-400 bg-slate-200 px-2 leading-normal transition duration-150 ease-in-out hover:border-blue-300 hover:bg-blue-300 active:bg-cyan-700"
            type="button"
          >
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
          </button>
        </div>
      </div>
    </div>
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />
    //   <div className="flex-grow pt-64 pl-64">
    //     <div className=" flex flex-col">
    //       <div className="flex flex-col">
    //         <h1 className="text-gray-100 font-midium text-5xl sm:text-6xl font-bold flex-grow">
    //           Share the world with your friends
    //         </h1>
    //         <p className="text-gray-300 mt-4 text-3xl flex-grow">
    //           Chat app lets you connect with the world
    //         </p>
    //       </div>
    //       <div className="flex mt-24 gap-6">
    //         <form action="/">
    //           <div className="relative flex justify-items-stretch w-full">
    //             <input
    //               type="text"
    //               placeholder="Email address"
    //               aria-label="Email address"
    //               aria-describedby="btn-email-submit"
    //               className="px-6 relative m-0 flex-auto rounded-s border-2 border-blue-500 font-medium text-xl bg-transparent bg-clip-padding leading-[1.6] outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 "
    //             />
    //             <button
    //               id="btn-email-submit"
    //               className="px-6 z-20 inline-block rounded-e bg-blue-500 shadowtext-xl text-white font-medium leading-normal transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg active:bg-blue-900"
    //               type="button"
    //             >
    //               Sign up for ChatApp
    //             </button>
    //           </div>
    //         </form>
    //         <button
    //           className="inline-block rounded-md border-2 outline-none border-blue-400 bg-slate-200 px-6  transition duration-150 ease-in-out hover:border-blue-300 hover:bg-blue-300 active:bg-cyan-700"
    //           type="button"
    //         >
    //           <div className="flex items-center gap-2 text-black text-xl font-medium leading-normal">
    //             Learn more
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-3 h-3"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    //               />
    //             </svg>
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HomePage;
