import React from "react";
import BodyCenter from "./BodyCenter";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import Grid from "@mui/material/Grid";
import "../Styles/Navbar.css";

const Body = () => {
  return (
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
          <BodyCenter />
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
  );
};

export default Body;
