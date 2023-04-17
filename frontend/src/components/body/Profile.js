import React from "react";
import { Avatar, IconButton, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "../Styles/ProfileStyle.css";
import Grid from "@mui/material/Grid";
import UserPosts from "./UserPosts";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { deepOrange, green, grey } from "@mui/material/colors";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Profile = () => {
  const user = useSelector(selectUser);

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
    <div>
      <div className="banner">
        <Avatar
          src={user?.photo}
          style={{ height: "80px", width: "80px", margin: "auto" }}
        />
        <div className="user">
          @
          {user?.displayName
            ? user?.displayName
            : String(user?.email).split("@")[0]}
        </div>
      </div>
      <div className="profile-grid">
        <div
          style={{
            height: "fit-content",
            marginTop: "0",
            width: "200px",

            backgroundColor: "white",
            borderRadius: "30px",
            padding: "30px",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              marginBottom: "20px",
              color: "#01bf71",
            }}
          >
            @
            {user?.displayName
              ? user?.displayName
              : String(user?.email).split("@")[0]}
          </div>
          <div className="about-me">
            <p>
              I'm a 400lvl Computer Science student. I'm currently interested in
              REactJs and Product design
              <IconButton>
                <EditIcon
                  style={{
                    height: "20px",
                  }}
                />
              </IconButton>
            </p>
          </div>
        </div>
        <div
          style={{
            height: "fit-content",
            width: "550px",
            margin: "auto",
            padding: "30px",
            borderRadius: "10px",
            paddingTop: "30px",
          }}
        >
          {questions.map((_q) => (
            <div key={_q._id} className="post">
              <UserPosts question={_q} />
            </div>
          ))}
        </div>
        <div
          style={{
            height: "fit-content",
            marginTop: "0",
            width: "200px",

            backgroundColor: "white",
            borderRadius: "30px",
            padding: "30px",
            paddingTop: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "15px",
              color: "#01bf71",
            }}
          >
            Your Communities
          </h1>
          <div className="community-con" style={{ padding: "0" }}>
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
      </div>
    </div>
  );
};

export default Profile;
