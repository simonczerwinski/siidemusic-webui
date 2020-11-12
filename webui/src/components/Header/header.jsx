import React, { useState, Component } from "react";
import Music from "../Music/music";
// import Slider from "../Slider/slider";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkData: [],
      isLoading: false,
      errorMessage: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Music />
      </React.Fragment>
    );
  }
}
