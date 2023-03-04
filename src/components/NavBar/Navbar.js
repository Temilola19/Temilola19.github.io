import React from "react";
import "../Styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link style={{ textDecoration: "none" }} to="/">
            <p>
              tech<span className="special">Space</span>
            </p>
          </Link>
        </div>
        <div className="nav-middle">
          <div className="nav-search-container">
            <SearchIcon
              style={{ color: "#8E8E8E", position: "absolute", left: "15px" }}
            />
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
        <div className="nav-right-container">
          <Avatar
            style={{
              height: "25px",
              width: "25px",
              marginTop: "0",
              marginBottom: "0",
            }}
          />
          <p>sincerelylara</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
