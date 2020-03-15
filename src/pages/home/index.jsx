import React, { Component } from "react";

import "./index.css";

import AboutMe from "./about-me";
import Header from "./header";
import MyWorks from "./my-works";
import Footer from "./footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header></Header>
        <AboutMe></AboutMe>
        <MyWorks></MyWorks>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
