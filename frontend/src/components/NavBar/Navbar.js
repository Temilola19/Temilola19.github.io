import React from "react";
import "../Styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { selectUser } from "../../features/userSlice";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";

// import { signOut } from "firebase/auth";
const Navbar = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link style={{ textDecoration: "none" }} to="/Home">
            <p className="logo">
              my<span className="special">Space</span>
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
          <Tooltip title="Home">
            <IconButton href="/Home">
              <HomeIcon
                style={{
                  color: "rgb(191, 191, 191)",
                  height: "25px",
                  width: "25px",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Community">
            <IconButton href="/Community">
              <PeopleIcon
                style={{
                  color: "rgb(191, 191, 191)",
                  height: "25px",
                  width: "25px",
                }}
              />
            </IconButton>
          </Tooltip>
          <div className="streaks">
            <Badge badgeContent={4} color="success">
              <WhatshotIcon color="action" />
            </Badge>
          </div>

          <div className="dropdown">
            <div className="profile">
              <Avatar
                src={user?.photo}
                style={{
                  height: "20px",
                  width: "20px",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              />
              <p>
                {" "}
                {user?.displayName
                  ? user?.displayName
                  : String(user?.email).split("@")[0]}
              </p>
            </div>
            <div className="dropdown-content">
              <Link to="/ProfilePage" style={{ textDecoration: "none" }}>
                <p>Profile</p>
              </Link>
              <p
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
