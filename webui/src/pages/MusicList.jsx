import React from "react";
import Bounce from "react-reveal/Bounce";
import * as AiIcons from "react-icons/ai";
import "../content/styles/music-list.scss";
import { MusicListData } from "../services/musicListData";

export default function MusicList() {
  return (
    <React.Fragment>
      <header className="header-standard">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="text-uppercase text-white font-weight-bold">
                My Music Mix List
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="section brickwall expand">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <ul className="list-group music-list-group">
                {MusicListData.map((item, index) => {
                  return (
                    <li key={index} class="list-group-item music-list-item">
                      <div class="music-list-holder align-items-lg-center flex-column flex-lg-row">
                        <div class="music-list-content">
                          {item.title}
                          {item.infoText}
                          {item.dateTime}
                          {item.rating}
                        </div>
                        {item.image}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
