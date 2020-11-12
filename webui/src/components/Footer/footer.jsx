import React from "react";
import { Link } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./footer.scss";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="blue">
        <div className="container-fluid">
          <div className="text-center">
            <LightSpeed left>
              <p> Made by Simon Czerwinski</p>
            </LightSpeed>
            <Bounce top>
              <div>
                <ul class="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/siideofficial"
                      target="blank"
                    >
                      <FaIcons.FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/SiideOfficial" target="blank">
                      <FaIcons.FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/user/SiideOfficial"
                      target="blank"
                    >
                      <FaIcons.FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://soundcloud.com/siide" target="blank">
                      <FaIcons.FaSoundcloud />
                    </a>
                  </li>
                </ul>
              </div>
            </Bounce>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
