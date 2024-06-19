import React from "react";

const ChatList = () => {
  return (
    <div className="flex flex-col border-r-2 border-gray-300 bg-gray-100 overflow-y-auto overflow-hidden">
      <div className="flex items-center justify-center m-4 h-28 w-72 bg-white rounded-lg shadow-lg border border-gray-300 hover:bg-blue-200 active:bg-blue-100">
        <div className="cursor-pointer p-4">
          <h3 className="font-bold">John Doe</h3>
          <p className="text-gray-600">This is the latest message...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
