import React from "react";
import Inform from "./../images/inform.svg";
import Update from "./../images/update.svg";
import Discovers from "./../images/discover.svg";
import "../Styles/LandingPageStyle.css";
import Post from "./../images/createpostbutton.png";

const Features = () => {
  return (
    <div id="Features">
      <div className="discoverl-container">
        <div className="discoverl">
          <h1>A space to</h1>
          <div className="card-grid">
            <div className="card">
              <img src={Inform} />
              <p>Inform</p>
            </div>
            <div className="card">
              <img src={Update} />
              <p>Update</p>
            </div>
            <div className="card">
              <img src={Discovers} />
              <p>Discover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
