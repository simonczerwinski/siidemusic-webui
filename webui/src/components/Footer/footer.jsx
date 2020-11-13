import React from "react";
import { Link } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
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
        
          
                <ul class="social-links">
                  <li>
                  <Slide left>
                    <div>
                    <a
                      href="https://www.facebook.com/siideofficial"
                      target="blank"
                    >
                      <FaIcons.FaFacebook />
                    </a>
                    </div>
                    </Slide>
                  </li>
                  <li>
                  <Slide bottom>
                    <div>
                    <a href="https://twitter.com/SiideOfficial" target="blank">
                      <FaIcons.FaTwitter />
                    </a>
                    </div>
                  </Slide>
                  </li>
                  <li>
                  <Slide top>
                    <div>
                    <a
                      href="https://www.youtube.com/user/SiideOfficial"
                      target="blank"
                    >
                      <FaIcons.FaYoutube />
                    </a>
                    </div>
                  </Slide>
                  </li>
                  <li>
                  <Slide right>
                    <div>
                    <a href="https://soundcloud.com/siide" target="blank">
                      <FaIcons.FaSoundcloud />
                    </a>
                    </div>
                  </Slide>
                  </li>
                </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
