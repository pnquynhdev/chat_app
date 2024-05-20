import React from "react";
import { IoArrowBackCircleOutline, IoImageOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { RiChatSettingsLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { FiSend } from "react-icons/fi";

function Chat() {
  return (
    <main className="grow relative basis-28 flex flex-col bg-white">
      <div className="flex items-center h-24 p-6 border-b-2">
        <button
          className="flex items-center justify-center mr-6"
          type="button"
          aria-label="Back to"
          hidden
        >
          <IoArrowBackCircleOutline style={{ width: "2em", height: "2em" }} />
        </button>
        <div className="w-12 h-12 shrink-0">
          <img
            src="./src/assets/profileimg.png"
            alt="User"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-bold text-xl">Design Team</span>
          <span className="text-xs text-gray-400">12 member, 5 online</span>
        </div>
        <div className="flex items-center space-x-6 ml-auto p-6 text-gray-400">
          <button className="" type="button" aria-label="Video call">
            <LuVideo style={{ width: "2em", height: "2em" }} />
          </button>
          <button className="" type="button" aria-label="Phone call">
            <AiOutlinePhone style={{ width: "2em", height: "2em" }} />
          </button>
          <button className="" type="button" aria-label="Chat settings">
            <RiChatSettingsLine style={{ width: "2em", height: "2em" }} />
          </button>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col grow p-6 bg-gray-100 overflow-y-auto overflow-hidden">
        <div className="flex">
          <img
            src="./src/assets/profileimg.png"
            alt="Avatar"
            className=" w-12 h-12 rounded-full shrink-0 object-cover"
          />
          <div className="flex flex-col ml-2">
            <div className="flex flex-row items-center mb-3">
              <span className="font-bold ml-2">Putri Tanjak</span>
              <span className="text-sm text-gray-400 shrink-0 ml-2">
                4:30 AM
              </span>
            </div>

            <p className="max-w-md mb-4 p-4 rounded-3xl rounded-tl-none bg-blue-100 text-black ">
              Look at this field! Beautiful!
            </p>
            <img src="./src/assets/profileimg.png" alt="Avatar" className="" />
          </div>
        </div>

        {/*  */}
        <div className="relative shrink-0 my-6 h-px bg-gray-300">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block uppercase bg-gray-100 px-4">
            today
          </span>
        </div>
        {/*  */}

        <div className="flex flex-row-reverse">
          <img
            src="./src/assets/profileimg.png"
            alt="Avatar"
            className=" w-12 h-12 rounded-full shrink-0 object-cover"
          />
          <div className="flex flex-col mr-2">
            <div className="flex flex-row-reverse mb-3">
              <span className=" font-bold ml-2">Putri Tanjak</span>
              <span className="text-sm text-gray-400 ">4:30 AM</span>
            </div>

            <p className="max-w-md mb-4 p-4 rounded-3xl rounded-tr-none bg-blue-100 text-black ">
              Look at this field! Beautiful!
            </p>
            <p className="max-w-md mb-4 p-4 rounded-3xl rounded-tr-none bg-blue-100 text-black ">
              Look at this field! Beautiful!
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex">
          <img
            src="./src/assets/profileimg.png"
            alt="Avatar"
            className=" w-12 h-12 rounded-full shrink-0 object-cover"
          />
          <div className="flex flex-col ml-2">
            <div className="flex flex-row items-center mb-3">
              <span className="font-bold ml-2">Putri Tanjak</span>
              <span className="text-sm text-gray-400 shrink-0 ml-2">
                4:30 AM
              </span>
            </div>

            <p className="max-w-md mb-4 p-4 rounded-3xl rounded-tl-none bg-blue-100 text-black ">
              Look at this field! Beautiful!
            </p>
            <img src="./src/assets/profileimg.png" alt="Avatar" className="" />
          </div>
        </div>
      </div>
      {/*  */}
      <form className="flex flex-row items-center justify-center bottom-0 bg-white border-t-2">
        <button
          className="shrink-0 text-gray-400 p-2 flex justify-center items-center"
          type="button"
          aria-label="Add media to message"
        >
          <IoIosLink style={{ width: "2em", height: "2em" }} />
        </button>
        <button
          className="shrink-0 text-gray-400 p-2 flex justify-center items-center"
          type="button"
          aria-label="Add media to message"
        >
          <IoImageOutline style={{ width: "2em", height: "2em" }} />
        </button>
        <textarea
          className="flex items-center w-full outline-0 bg-white text-black p-4 max-h-24"
          contentEditable="true"
          tabIndex={0}
          dir="ltr"
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Type your message here..."
          te
        />

        <button
          className="flex items-center justify-center p-2 shrink-0 w-12 h-12"
          type="button"
          aria-label="submit"
        >
          <FiSend style={{ width: "2em", height: "2em" }} />
        </button>
      </form>
    </main>
  );
}

export default Chat;
