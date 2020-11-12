import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoPlay from "react-awesome-slider/dist/autoplay";
import { SliderData } from "./sliderData";
import "react-awesome-slider/dist/styles.css";
import "./slider.scss";

const AutoplaySlider = withAutoPlay(AwesomeSlider);

class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay-slide"></div>
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
          {SliderData.map((item, index) => {
            return <div key={index} data-src={item.bgImage} />;
          })}
        </AutoplaySlider>
      </React.Fragment>
    );
  }
}

export default Slider;
