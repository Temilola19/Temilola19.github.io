import React from "react";
import image from "../../images/pexels-christina-morillo-1181467.jpg";
import "../../Styles/communityStyle.css";
import "../../Styles/PostStyle.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import ReactHtmlParser from "react-html-parser";
import CommunityPost from "./CommunityPost";
import "../../Styles/ViewQuestion.css";
import Navbar from "../../NavBar/Navbar";

const Center = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div className="containeropen">
          <img
            src={image}
            alt="Snow"
            style={{
              margin: "0",
              width: "100%",
              height: "100%",

              opacity: "0.4",
              objectFit: "cover",
            }}
          ></img>
          <p className="name">UI/UX</p>
        </div>

        <div className="container-community">
          <div style={{ marginTop: "30px", textAlign: "right" }}>
            <CommunityPost />
            <div className="all-postss">
              <div className="posts">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  <div className="post-title">Hi everyone</div>
                </Link>

                <div className="post-info">
                  <Avatar style={{ height: "20px", width: "20px" }} />
                  <div className="user-name">Temilola Afolabi</div>
                  <div className="time-of-post">today</div>
                </div>
                <div className="post-body">hmmmmmm</div>
                <div className="post-tag">welll</div>

                <div>
                  <div className="post-likes" style={{ marginBottom: "10px" }}>
                    <IconButton>
                      <FavoriteIcon
                        style={{
                          height: "20px",
                          width: "20px",
                          color: "#afafaf",
                        }}
                      />
                    </IconButton>
                    <p>10 likes</p>
                  </div>

                  <ReactQuill
                    // value={answer}
                    // onChange={handleQuill}
                    className="react-quill"
                    theme="snow"
                    style={{
                      minHeight: "100px",
                      height: "fit-content",
                      width: "450px",
                      border: "none",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "10px",
                      color: "#8e8e8e",
                      backgroundColor: "#f1f1f1",
                    }}
                  />

                  <Button
                    type="submit"
                    // onClick={handleSubmit}
                    variant="contained"
                    size="small"
                    style={{
                      backgroundColor: "#01bf71",
                      float: "right",
                      color: "#fff",
                      borderRadius: "30px",
                      width: "25px",
                      textTransform: "none",
                      paddingTop: "6px",
                      paddingBottom: "6px",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                      marginTop: "10px",
                      marginRight: "18px",
                      fontSize: "10px",
                      boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
                    }}
                  >
                    Comment
                  </Button>

                  <div className="post-comments" style={{ marginTop: "50px" }}>
                    <IconButton>
                      <CommentIcon
                        style={{
                          color: "#afafaf",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                    </IconButton>
                    <p>10 comments</p>
                  </div>
                  <div className="postedComments">
                    <div className="postedComment">
                      <div className="author-info">
                        <Avatar style={{ height: "20px", width: "20px" }} />
                        <p className="username">@SincerelyLara</p>
                      </div>
                      <div className="commentContent">yesssss</div>
                      <div className="commentTime">a second ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-community">
            <p className="head">About UI/UX</p>
            <p className="descriptions">
              This is a community created for UI/UX designers to help and learn
              from one another.
            </p>

            <p className="members">30 members</p>
            <p className="created">
              Created today by{" "}
              <span style={{ color: "#7d7d7d" }}>SincerelyLara</span>
            </p>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/ViewCommunity"
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#bf4a01",
                color: "#fff",
                float: "right",
                borderRadius: "30px",
                width: "fit-content",
                height: "fit-content",
                paddingTop: "5px",
                paddingBottom: "5px",
                textTransform: "lowercase",
                paddingLeft: "5px",
                paddingRight: "5px",
                marginTop: "0",
                boxShadow: " 0px 10px 20px #bf4a0140",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
