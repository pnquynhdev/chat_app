import React from "react";
import { RiMessage2Line } from "react-icons/ri";
import {
  IoIosCall,
  IoMdContacts,
  IoMdSettings,
  IoIosLogOut,
} from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";

function ChatSidebar() {
  const { loading, logout } = useLogout();
  const handleLogout = (e) => {
    e.preventDefault();
    if (loading) return;
    logout();
  };
  return (
    <nav className="w-16 shadow-lg flex flex-col bg-gray-900 text-white ">
      <img
        src="./src/assets/profileimg.png"
        alt="profile picture"
        className="flex items-center justify-center w-12 h-12 mt-2 mb-2 mx-auto shadow-lg border-2 border-blue-500 rounded-full"
      />
      <ul>
        <SideBarIcon icon={<RiMessage2Line size="25" />} text="Message" />
        <SideBarIcon icon={<IoIosCall size="25" />} text="Call" />
        <SideBarIcon icon={<IoMdContacts size="25" />} text="Friends" />
        <SideBarIcon icon={<IoNotifications size="25" />} text="Notification" />

        <SideBarIcon icon={<IoMdSettings size="25" />} text="Setting" />
        <SideBarIcon
          icon={
            loading ? (
              <span className="loading loading-spinner size-5"></span>
            ) : (
              <IoIosLogOut size="25" />
            )
          }
          text="LogOut"
          onClick={handleLogout}
          linkto="/logout"
        />
      </ul>
    </nav>
  );
}

export default ChatSidebar;

const SideBarIcon = ({ icon, text, onClick, linkto }) => (
  <li>
    <Link to={linkto} className="sidebar-icon group" onClick={onClick}>
      {icon}
      <span className="sidebar-text group-hover:scale-100">{text}</span>
    </Link>
  </li>
);
