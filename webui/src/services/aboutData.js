import React from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

export const aboutData = [
  {
    title: (
      <Slide right>
        <h2>My name is Simon Edward Czerwinski</h2>
      </Slide>
    ),
    infoText: (
      <Slide left>
        <p>
          I'm the head master, music producer and the developer for Siide Music!
          On my spare time when I’m not taking the car, I often take long trips
          with my motorcycle. I have a deep passion for music. I like to produce
          and publish my music during my spare time. I distribute my music
          through Spotify, iTunes, Tidal and Google Play. I also have a passion
          for mixing at DJ-tables. Besides that, I work out as often as I can at
          the gym or spend time with my friends and family.
        </p>
      </Slide>
    ),
    image: (
      <Bounce>
        <img src="/images/portfolio/me-motorcycle.jpg" alt="me-on-motorcycle" />
      </Bounce>
    ),
  },
];
