import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
export const mainMenuData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    className: "mainMenu-item",
  },
  {
    title: "My Music List",
    path: "/musiclist",
    icon: <GiIcons.GiLoveSong />,
    className: "mainMenu-item",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdPeople />,
    className: "mainMenu-item",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillPhone />,
    className: "mainMenu-item",
  },
];
