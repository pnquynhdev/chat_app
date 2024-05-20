import React from "react";
import ChatSidebar from "../components/ChatSidebar";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";

function ChatPage() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <ChatSidebar />
      <ChatList />
      <Chat />
    </div>
  );
}

export default ChatPage;
