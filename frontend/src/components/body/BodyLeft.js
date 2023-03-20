import React from "react";
import "../Styles/Navbar.css";
import { Avatar, IconButton, Button } from "@mui/material";
import { deepOrange, green, grey } from "@mui/material/colors";
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
        <div className="community-con">
          <div className="community">
            <Avatar
              sx={{
                bgcolor: grey[400],
              }}
              variant="rounded"
            ></Avatar>
            <div className="community-info">
              <p className="name">UI/UX</p>
              <p className="members">30 members</p>
            </div>
          </div>
          <div className="community">
            <Avatar
              sx={{
                bgcolor: grey[400],
              }}
              variant="rounded"
            ></Avatar>
            <div className="community-info">
              <p className="name">UI/UX</p>
              <p className="members">30 members</p>
            </div>
          </div>
          <div className="community">
            <Avatar
              sx={{
                bgcolor: grey[400],
              }}
              variant="rounded"
            ></Avatar>
            <div className="community-info">
              <p className="name">UI/UX</p>
              <p className="members">30 members</p>
            </div>
          </div>

          <Button
            href="/Community"
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#01bf71",
              justifyItem: "center",
              textAlign: "center",
              margin: "auto",
              color: "#fff",
              borderRadius: "30px",
              width: "150px",
              textTransform: "none",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "35px",
              paddingRight: "35px",
              marginTop: "25px",
              fontSize: "12px",
              boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
            }}
          >
            See all
          </Button>
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
