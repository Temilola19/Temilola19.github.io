import React from "react";
import "../Styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { selectUser } from "../../features/userSlice";
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
        <div
          onClick={() => {
            auth.signOut();
            navigate("/");
          }}
          className="nav-right-container"
        >
          <Avatar
            src={user?.photo}
            style={{
              height: "20px",
              width: "20px",
              marginTop: "0",
              marginBottom: "0",
            }}
          />
          <p>Sincerelylara</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
