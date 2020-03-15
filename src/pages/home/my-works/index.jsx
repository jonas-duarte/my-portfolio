import React, { Component } from "react";

import "./index.css";

const images = require.context("../../../resources/works/", true);

const works = [
  {
    label: "Stock Market Brazil",
    tags: ["Web", "Web Scrapping"],
    images: [
      "stockMarket1.png",
      "stockMarket2.png",
      "stockMarket3.png",
      "stockMarket4.png"
    ],
    description:
      "In early 2019 I started to invest in the Brazilian Stock Market and I created this Web Page to help me. In this project I had to extract some infos at another Website, then I learned how to make a Web Scrapper"
  },
  {
    label: "Whale Pocket",
    tags: ["Web"],
    images: ["whalePocket.png"],
    description:
      "Whale Pocket is a unfinished job, which is a new interface that I want to apply in the Stock Market, I hope to finish this project someday"
  },
  {
    label: "TW Scripts",
    tags: ["Web", "Web Scrapping", "Browser scripting", "Chrome Extension"],
    images: [
      "twScripts1.png",
      "twScripts2.png",
      "twScripts3.png",
      "twScripts4.png"
    ],
    description:
      "Tribal Wars is a browser game that I used to play, so I created this Chrome Extension to help me there :)"
  },
  {
    label: "My Portfolio",
    tags: ["Web"],
    images: ["myPortifolio.png"],
    description:
      "I left my job to start my freelancer career, so I created this portfolio to help me get a job."
  },
  {
    label: "House Manager",
    tags: ["Google sheets"],
    images: [
      "houseManager1.png",
      "houseManager2.png",
      "houseManager3.png",
      "houseManager4.png"
    ],
    description:
      "I lived a year with some friend in 2018, so I did this sheet to organize our financial spents"
  },
  {
    label: "Agenda",
    tags: ["Google sheets"],
    images: ["agenda.png"],
    description:
      "I created this agenda to organize my weakly routine, but it not worked :(. However, the sheet it's nice (look there, it's show what I should be doing right now) :D"
  },
  {
    label: "Ocean Life",
    tags: ["Web"],
    images: ["oceanLife1.png", "oceanLife2.png", "oceanLife3.png"],
    description:
      "The ocean life never have never gonna be so dumb!!! This is the sketch of my portifolio, so you can see why I have changed my mind and created this one"
  },
  {
    label: "My Work Station",
    tags: ["Web"],
    images: ["workStation.jpg"],
    description:
      "When I bought my computer I thought in create a nice place to work in my bedroom, then I have done it :) (I did all the handwork, so I am really glad for that)"
  }
];

class MyWorks extends Component {
  state = { work: null, imgIndex: 0 };

  onImageChange = direction => {
    const { work, imgIndex } = this.state;
    switch (direction) {
      case "left":
        if (imgIndex == 0) return;
        this.setState({ imgIndex: imgIndex - 1 });
        return;
      case "right":
        if (imgIndex == works[work].images.length - 1) return;
        this.setState({ imgIndex: imgIndex + 1 });
        return;
    }
  };

  render() {
    const { work, imgIndex } = this.state;

    let test = null;
    if (work !== null) {
      test = images(`./${works[work].images[imgIndex]}`);
    }

    return (
      <div className="my-works">
        <h1>MY WORKS</h1>
        <div className="my-works-container">
          {works.map((w, i) => {
            let image = images(`./${w.images[0]}`);
            return (
              <div
                className="work-panel"
                style={{
                  backgroundImage: `url(${image})`
                }}
                onClick={() => this.setState({ work: i })}
              >
                <div className="work-label">{w.label}</div>
              </div>
            );
          })}
        </div>
        <div
          className="work-modal"
          style={{ display: work == null ? "none" : "block" }}
        >
          <div className="work-modal-functions">
            <div onClick={() => this.onImageChange("left")}>
              <i className="fa fa-chevron-left"></i>
            </div>
            <div onClick={() => this.onImageChange("right")}>
              <i className="fa fa-chevron-right"></i>
            </div>
            <div onClick={() => this.setState({ work: null, imgIndex: 0 })}>
              <i class="fa fa-times"></i>
            </div>
          </div>
          <div className="image-viewer">
            <h1>{!works[work] || works[work].label}</h1>
            <div></div>
            <div className="image-viewer-image">
              <img src={test}></img>
            </div>
            <div className="image-viewer-description">
              {!works[work] || works[work].description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWorks;
