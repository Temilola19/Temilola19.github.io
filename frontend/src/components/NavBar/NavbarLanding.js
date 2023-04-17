import React from "react";
import "../Styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton, Tooltip, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { selectUser } from "../../features/userSlice";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";

// import { signOut } from "firebase/auth";
const NavbarLanding = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div
      className="navbar"
      style={{ position: "fixed", width: "100%", zIndex: "1" }}
    >
      <div className="nav-container">
        <div className="nav-left">
          <Link style={{ textDecoration: "none" }} to="">
            <p className="logo">
              my<span className="special">Space</span>
            </p>
          </Link>
        </div>
        <div
          className="nav-middle"
          style={{
            display: "flex",
            columnGap: "30px",
          }}
        >
          <AnchorLink href="#About" className="link">
            <p className="navp">About</p>
          </AnchorLink>
          <AnchorLink href="#Features" className="link">
            <p className="navp">Features</p>
          </AnchorLink>

          <AnchorLink href="#Signup" className="link">
            {" "}
            <p className="navp">Signup</p>
          </AnchorLink>
        </div>

        <div className="nav-right-container">
          <Button
            href="/auth"
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#01bf71",
              color: "#fff",
              borderRadius: "30px",
              width: "fit-content",
              height: "fit-content",
              paddingTop: "5px",
              paddingBottom: "5px",
              textTransform: "none",
              fontSize: "15px",
              paddingLeft: "30px",
              paddingRight: "30px",
              boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarLanding;
