import React, { useState, useEffect } from "react";
import { mainMenuData } from "../../services/mainMenuData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "./navbar.scss";

export default function Navbar() {
  const [navbar, setNavbarClass] = useState("navbar");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 103) {
      return setNavbarClass("navbar");
    } else if (window.scrollY > 100) {
      return setNavbarClass("navbar navbar-scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [mainMenu, setmainMenu] = useState(false);
  const showmainMenu = () => setmainMenu(!mainMenu);

  return (
    <React.Fragment>
      <Link
        onClick={showmainMenu}
        to="#"
        className={mainMenu ? "mainMenu-close active" : "mainMenu-close"}
      >
        <AiIcons.AiOutlineClose />
      </Link>
      <div className={navbar}>
        <Link to="#" className="menu-bars front">
          <FaIcons.FaBars onClick={showmainMenu} />
        </Link>
        <div className="navbar-brand align-items-center justify-content-center text-center">
          <img
            src="/images/logotypes/Siide_logotype_white.png"
            alt="me-on-motorcycle"
          />
        </div>
      </div>
      <div className={mainMenu ? "mainMenu active" : "mainMenu"}>
        <div className="mainMenu-wrapper">
          <ul className="mainMenu-ul" onClick={showmainMenu}>
            {mainMenuData.map((item, index) => {
              return (
                <Zoom key={index}>
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </Zoom>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
