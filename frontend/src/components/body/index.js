import React, { useState } from "react";
import BodyCenter from "./BodyCenter";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import Grid from "@mui/material/Grid";
import "../Styles/Navbar.css";
import axios from "axios";

const Body = () => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    async function getQuestion() {
      await axios
        .get("http://localhost/api/question")
        .then((res) => {
          console.log(res.data);
          setQuestions(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getQuestion();
  }, []);

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
          <BodyCenter questions={questions} />
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
