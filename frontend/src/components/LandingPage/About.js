import React from "react";
import Image from "./../images/man-and-woman.svg";
import "../Styles/LandingPageStyle.css";

const About = () => {
  return (
    <div id="About">
      <div className="aboutl">
        <div className="aboutgrid">
          <div className="aboutgridLeft">
            <p
              style={{
                color: "#01bf71",
                textTransform: "uppercase",
                fontSize: "15px",
              }}
            >
              Your Space
            </p>
            <h1>
              Share thoughts with <br /> like minded students
            </h1>
            <p>
              Be a part of our virtual community for students
              <br /> to connect, collaborate and share information <br />
              and resources.
            </p>
          </div>
          <div className="aboutgridRight">
            <img src={Image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
