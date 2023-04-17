import { Avatar, IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import "../Styles/PostStyle.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import ReactHtmlParser from "react-html-parser";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FlagIcon from "@mui/icons-material/Flag";

const UserPosts = ({ questionData, question, props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let tags = JSON.parse(question?.tags[0]);

  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(question?.likes?.length);

  const user = useSelector(selectUser);

  const handleLike = async () => {
    try {
      const response = await axios.post("http://localhost/api/likes", {
        user: user,
        post: question._id,
      });
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkIfLiked = async () => {
      try {
        const response = await axios.get(
          `http://localhost/api/likes/${question._id}/${user?.uid}`
        );
        setIsLiked(response.data.isLiked);
      } catch (error) {
        console.error(error);
      }
    };
    checkIfLiked();
  }, [question._id, user]);

  return (
    <div className="all-posts">
      <div className="all-posts-container">
        <Tooltip title="Flag Post" arrow>
          <IconButton
            style={{
              float: "right",
            }}
            id="long-button"
          >
            <FlagIcon
              style={{
                color: "#afafaf",
                height: "20px",
              }}
            />
          </IconButton>
        </Tooltip>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/ViewQuestion?q=${question?._id}`}
        >
          <div className="post-title">{question?.title}</div>
        </Link>

        <div className="post-info">
          <Avatar
            src={question?.user?.photo}
            style={{ height: "20px", width: "20px" }}
          />
          <div className="user-name">
            {question?.user?.displayName
              ? question?.user?.displayName
              : String(question?.user?.email).split("@")[0]}
          </div>
          <div className="time-of-post">
            {new Date(question?.created_at).toLocaleString()}
          </div>
        </div>
        <div className="post-body">
          {ReactHtmlParser(truncate(question?.body, 300))}
        </div>
        <div className="post-tags">
          {tags.map((_tag, index) => (
            <div key={index} className="post-tag">
              {_tag}
            </div>
          ))}
        </div>

        <div className="post-reaction">
          <div className="post-likes">
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon
                  style={{ height: "20px", width: "20px", color: "red" }}
                />
              ) : (
                <FavoriteIcon
                  style={{ height: "20px", width: "20px", color: "#afafaf" }}
                />
              )}
            </IconButton>
            <p>{likeCount} likes</p>
          </div>

          <div className="post-comments">
            <IconButton>
              <CommentIcon
                style={{ color: "#afafaf", height: "20px", width: "20px" }}
              />
            </IconButton>
            <p>{question?.answerDetails?.length} comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
