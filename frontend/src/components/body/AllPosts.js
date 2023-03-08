import { Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import "../Styles/PostStyle.css";
import React from "react";

const AllPosts = () => {
  return (
    <div className="all-posts">
      <div className="all-posts-container">
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

        <div className="post-reaction">
          <div className="post-likes">
            <IconButton>
              <FavoriteIcon
                style={{ color: "#afafaf", height: "20px", width: "20px" }}
              />
            </IconButton>

            <p className="likesN">20 Likes</p>
          </div>
          <div className="post-comments">
            <IconButton>
              <CommentIcon
                style={{ color: "#afafaf", height: "20px", width: "20px" }}
              />
            </IconButton>

            <p className="commentsN">20 Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
