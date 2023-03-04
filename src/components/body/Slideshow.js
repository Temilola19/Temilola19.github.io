import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "200px",
  borderRadius: "30px",
  marginBottom: "30px",
};
const fadeImages = [
  {
    url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    caption: "First Slide",
  },
  {
    url: "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Second Slide",
  },
  {
    url: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Third Slide",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${fadeImage.url})` }}
            >
              <span style={spanStyle}>{fadeImage.caption}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;
