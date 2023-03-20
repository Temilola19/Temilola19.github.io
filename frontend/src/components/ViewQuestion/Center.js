import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Avatar, IconButton, Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import "../Styles/PostStyle.css";
import "../Styles/ViewQuestion.css";
import NewPosts from "../body/NewPosts";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Center = ({ match }) => {
  const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState("");
  const user = useSelector(selectUser);

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const handleQuill = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    async function getQuestionDetails() {
      await axios
        .get(`http://localhost/api/question/${id}`)
        .then((res) => {
          console.log(res.data[0]);
          setQuestionData(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getQuestionDetails();
  }, [id]);

  async function getUpdatedAnswer() {
    await axios
      .get(`http://localhost/api/question/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setQuestionData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = async () => {
    if (answer !== "") {
      const body = {
        question_id: id,
        answer: answer,
        user: user,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .post("http://localhost/api/answer", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added successfully");
          setAnswer("");
          getUpdatedAnswer();
        })
        .catch((err) => {
          console.log(err);
          alert("An error occured while adding your answer");
        });
    }
  };

  return (
    <div>
      <NewPosts />
      <div className="question-container">
        <div className="post-title">{questionData?.title}</div>
        <div className="post-info">
          <Avatar
            src={questionData?.user?.photo}
            style={{ height: "20px", width: "20px" }}
          />
          <div className="user-name">
            {" "}
            {questionData?.user?.displayName
              ? questionData?.user?.displayName
              : String(questionData?.user?.email).split("@")[0]}
          </div>
          <div className="time-of-post">
            {new Date(questionData?.created_at).toLocaleString()}
          </div>
        </div>
        <div className="post-body">{ReactHtmlParser(questionData?.body)}</div>
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
            value={answer}
            onChange={handleQuill}
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
            onClick={handleSubmit}
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
            <p className="commentsN">{questionData?.answerDetails?.length}</p>
          </div>
        </div>
        <div className="postedComments">
          {questionData?.answerDetails?.map((_q) => (
            <div key={_q?._id} className="postedComment">
              <div className="author-info">
                <Avatar
                  src={_q?.user?.photo}
                  style={{ height: "20px", width: "20px" }}
                />
                <p className="username">
                  {" "}
                  {_q?.user?.displayName
                    ? _q?.user?.displayName
                    : String(_q?.user?.email).split("@")[0]}
                </p>
              </div>
              <div className="commentContent">
                {ReactHtmlParser(_q?.answer)}
              </div>
              <div className="commentTime">
                {new Date(_q?.created_at).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Center;
