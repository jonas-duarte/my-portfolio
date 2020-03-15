import React from "react";

import "./index.css";
import profile from "../../../resources/profile.jpeg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-container">
        <img src={profile} className="about-me-image"></img>
        <div className="about-me-text">
          <h1>ABOUT ME</h1>
          <div>
            Hello, my name is Jonas and I am a Fullstack Software Developer!
            <br></br>
            <br></br>I am from Brazil and I want to expand my work to the whole
            world, therefore I became a freelancer.<br></br>
            <br></br>
            Go ahead and look at my work!!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
