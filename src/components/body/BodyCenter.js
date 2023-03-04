import { Avatar, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import AllPosts from "./AllPosts";
import NewPosts from "./NewPosts";
import Slideshow from "./Slideshow";
const BodyCenter = () => {
  return (
    <div>
      {/* <Slideshow /> */}
      <NewPosts />
      <br /> <br />
      <div className="posts">
        <div className="post">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/ViewQuestion"
          >
            <AllPosts />
          </Link>
          <AllPosts />
          <AllPosts />
          <AllPosts />
          <AllPosts />
        </div>
      </div>
      {/* <br /> <br />
      <br />
      <div className="body"></div>
      <br />
      <br />
      <div className="body"></div>
      <br />
      <br />
      <div className="body"></div>
      <br />
      <br />
      <div className="body"></div> */}
    </div>
  );
};

export default BodyCenter;
