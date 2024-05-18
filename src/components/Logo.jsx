import React from "react";
import { BsFillChatHeartFill } from "react-icons/bs";

function Logo() {
  return (
    <div className="flex">
      <a href="#" className="flex flex-col cursor-pointer pt-4">
        <BsFillChatHeartFill
          style={{
            fill: "white",
            height: "3em",
            width: "3em",
            marginLeft: "1em",
            marginRight: "1em",
          }}
        />
        <h1 className=" font-medium text-xl text-neutral-200">ChatApp</h1>
      </a>
    </div>
  );
}

export default Logo;
