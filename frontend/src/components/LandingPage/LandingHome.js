import React from "react";
import "../Styles/LandingPageStyle.css";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LandingHome = () => {
  return (
    <div>
      <div className="lhome-container">
        <div className="lhome">
          <div className="lhome-content">
            <h1>A Space For Every Student</h1>
            <p>Sign Up to join our community</p>
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
                paddingTop: "10px",
                paddingBottom: "10px",
                textTransform: "none",
                paddingLeft: "30px",
                paddingRight: "30px",
                boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
                fontSize: "15px",
              }}
            >
              Get Started
              <KeyboardArrowRightIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
