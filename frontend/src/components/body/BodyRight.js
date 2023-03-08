import React from "react";
import "../Styles/Navbar.css";
import { Avatar, IconButton, Button } from "@mui/material";

const BodyRight = () => {
  return (
    <div>
      <div className="body">
        <div className="cardD-title">
          <h1>Daily Quests</h1>
        </div>
      </div>
      <br /> <br />
      <div className="body">
        <div className="cardP-title">
          <h1>Popular Tags</h1>
          <div className="popular-tags">
            <p className="tag">Javascript</p>
            <p className="tag">Reactjs</p>
            <p className="tag">Cosc 305</p>
            <p className="tag">Kotlin</p>
            <p className="tag">Flutter</p>
            <p className="tag">CSS</p>
          </div>
          {/* <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#01bf71",
              justifyItem: "center",
              color: "#fff",
              borderRadius: "30px",
              width: "150px",
              textTransform: "none",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "35px",
              paddingRight: "35px",
              marginTop: "10px",
              fontSize: "12px",
              boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
            }}
          >
            See all
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default BodyRight;
