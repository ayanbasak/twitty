
import {  AiOutlineHome, AiOutlineLeft,  AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { BiHash } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import {  FaRegUser } from "react-icons/fa";

export const links = [
    {
      label: "Home",
      icon: <AiOutlineHome />,
      to: "/",
      notification: 0,
    },
    {
      label: "Explore",
      icon: <BiHash />,
      to: "/explore",
      notification: 0,
    },
    {
      label: "Notification",
      icon: <IoNotificationsOutline />,
      to: "/notification",
      notification: 1,
    },
    {
      label: "Profile",
      icon: <FaRegUser />,
      to: "/profile",
      notification: 0,
    },
  ];
  
  export const secondaryLinks = [
    // {
    //   label: "Settings",
    //   icon: <AiOutlineSetting />,
    //   to: "/",
    // },
    {
      label: "Logout",
      icon: <MdLogout />,
      to: "/logout",
    },
  ];