import React from "react";
import { Button } from "@mui/material";
import "../Styles/LandingPageStyle.css";
import Com from "./../images/community.svg";

const Signup = () => {
  return (
    <div id="Signup">
      <div className="signupl-container">
        <div className="signupl">
          <div className="signupl-grid">
            <div className="sigupl-gridLeft">
              <h1>
                {" "}
                Become a part of our
                <br /> community today
              </h1>
              <p>Sign Up to join</p>
              <Button
                // href="/AddPost"
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
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
                  fontSize: "15px",
                }}
              >
                Sign Up
              </Button>
            </div>
            <div className="signupl-gridRight">
              <img src={Com} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
