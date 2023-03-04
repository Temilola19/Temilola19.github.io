import React from "react";
import "../Styles/Navbar.css";
import imageC from "../images/undraw_meet_the_team_re_4h08.svg";
import videoC from "../videos/pexels-gabby-k-5389515.mp4";
const BodyLeft = () => {
  return (
    <div>
      <div className="body">
        <div className="cardC-title">
          {/* <video autoPlay loop muted>
            <source src={videoC} type="video/mp4" />
          </video> */}
          {/* <img src={imageC} /> */}
          <h1>Your Communities</h1>
        </div>
      </div>
      <br /> <br />
      <div className="body">
        <div className="cardA-title">
          <h1>Activity</h1>
        </div>
      </div>
    </div>
  );
};

export default BodyLeft;
