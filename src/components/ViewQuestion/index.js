import React from "react";
import BodyLeft from "../body/BodyLeft";
import BodyRight from "../body/BodyRight";
import Center from "./Center";
import Grid from "@mui/material/Grid";
import "../Styles/Navbar.css";
import Navbar from "../NavBar/Navbar";
const Question = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Grid
          container
          spacing={6}
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <Grid
            item
            xs
            style={{
              position: "sticky",
            }}
          >
            <BodyLeft />
          </Grid>
          <Grid item xs={6}>
            <Center />
          </Grid>
          <Grid
            item
            xs
            style={{
              position: "sticky",
            }}
          >
            <BodyRight />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Question;
