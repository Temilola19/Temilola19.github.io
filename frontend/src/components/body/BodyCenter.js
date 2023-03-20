import { Avatar, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import AllPosts from "./AllPosts";
import NewPosts from "./NewPosts";
import Slideshow from "./Slideshow";
const BodyCenter = ({ questions }) => {
  return (
    <div>
      {/* <Slideshow /> */}
      <NewPosts />
      <br /> <br />
      <div className="posts">
        {questions.map((_q) => (
          <div key={_q._id} className="post">
            <AllPosts question={_q} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyCenter;
