import React from "react";
import { Avatar, IconButton, Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import "../Styles/PostStyle.css";
import "../Styles/ViewQuestion.css";
import NewPosts from "../body/NewPosts";

const Center = () => {
  return (
    <div>
      <NewPosts />
      <div className="question-container">
        <div className="post-title">
          Does anyone have links to any good javascript tutorial?
        </div>
        <div className="post-info">
          <Avatar style={{ height: "20px", width: "20px" }} />
          <div className="user-name">@username</div>
          <div className="time-of-post">time ago</div>
        </div>
        <div className="post-body">
          I just recently started learning javascript and all the resources I’ve
          come across have all been very overwhelming. Anyone know any good
          tutorial or resource for absolute beginers?
        </div>
        <div className="post-tags">
          <div className="post-tag">Javascript</div>
          <div className="post-tag">web development</div>
        </div>

        <div>
          <div className="post-likes">
            <IconButton>
              <FavoriteIcon
                style={{
                  color: "#afafaf",
                  height: "20px",
                  width: "20px",
                  padding: "none",
                }}
              />
            </IconButton>
            <p className="likesN">20 Likes</p>
          </div>
          <br />
          <ReactQuill
            className="react-quill"
            theme="snow"
            style={{
              height: "100px",
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
          <br />
          <div
            style={{
              color: "#afafaf",
              height: "20px",
              width: "100px",
              marginTop: "50px",
            }}
            className="post-comments"
          >
            {" "}
            <IconButton>
              <CommentIcon
                style={{
                  color: "#afafaf",
                  height: "20px",
                  width: "20px",
                }}
              />
            </IconButton>
            <p className="commentsN">20 Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
