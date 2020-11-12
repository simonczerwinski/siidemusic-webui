import React, { Component } from "react";
import ButtonGetMusic from "./buttonGetMusic";
import MusicData from "./musicData";
import Slider from "../Slider/slider";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import "./music.scss";

let timer = null;
export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMusicData: false,
      isLoading: false,
    };
  }

  triggerMusicData = (event) => {
    this.setState((currentState) => ({
      showMusicData: !currentState.showMusicData,
    }));

    setTimeout(
      () =>
        this.setState({
          isLoading: true,
          showMusicData: true,
        }),
      1000
    );

    timer = setTimeout(
      () =>
        this.setState({
          isLoading: false,
        }),
      3000
    );
  };

  componentWillUnmount() {
    clearTimeout(timer);
  }

  render() {
    const { isLoading } = this.state;
    const loaderLayout = (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
    return (
      <React.Fragment>
        <Slider />
        <section className="header-top">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10">
                <LightSpeed right>
                  <h1 className="text-uppercase text-white font-weight-bold">
                    Welcome to Siide Music!
                  </h1>
                </LightSpeed>
                <Bounce top>
                  <h2>Don't know what to listen to?</h2>
                </Bounce>
                <Zoom bottom>
                  <div>
                    <ButtonGetMusic
                      triggerMusicData={this.triggerMusicData}
                      onClick={this.handleReset}
                    />
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </section>
        <section className="section dark">
          {/* {isLoading ? loaderLayout : ""} */}

          {this.state.showMusicData && <MusicData />}
        </section>
      </React.Fragment>
    );
  }
}
