import React from "react";
import Modal from "../Modal";
import "../../Styles/CreatePost.css";
import { IconButton } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Avatar, Button } from "@mui/material";
import TagsInput from "react-tagsinput";
import { useNavigate } from "react-router";
import "react-tagsinput/react-tagsinput.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import axios from "axios";
const CommunityPostModal = ({ openPostModal, setOpenPostModal }) => {
  const [tags, setTags] = React.useState([]);
  const user = useSelector(selectUser);
  const [questions, setQuestions] = React.useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (value) => {
    setTags(value);
  };

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  // const [newTags, setNewTags] = React.useState([]);

  const handleSubmit = async () => {
    if (question !== "") {
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tags),
        user: user,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .post("http://localhost/api/CommunityQuestions", bodyJSON, config)
        .then((res) => {
          console.log(res.data);
          alert("Question added successfully");
          setQuestion("");
          //getUpdatedCommunityQuestion();
          setLoading(false);
          setOpenPostModal(false);
        })
        .catch((err) => {
          console.log(err);
          alert("An error occured while adding your question");
        });
    }
  };

  const navigate = useNavigate();

  const handleQuill = (value) => {
    setBody(value);
  };

  return (
    <Modal open={openPostModal} style={{ marginTop: "30px" }}>
      <div className="postModal">
        <div>
          <IconButton
            className="close"
            onClick={() => setOpenPostModal(false)}
            style={{ textAlign: "right" }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div>
          <Avatar
            src={user?.photo}
            style={{
              height: "50px",
              width: "50px",
              margin: "auto",
              marginBottom: "30px",
            }}
          />
          <h2
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "#252525",
              marginBottom: "50px",
            }}
          >
            Create your public community post
          </h2>
        </div>
        <form>
          <label>
            Title
            <br />
            <p>Your Title should be specific and eye catching!</p>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            type="text"
          />
          <br />
          <br />
          <br />
          <label>
            Body
            <br />
            <p>Provide more information about your title</p>
          </label>
          {/* <textarea
                style={{
                  width: "600px",
                  height: "150px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  outline: "none",
                }}
                type="text"
              /> */}
          <ReactQuill
            value={body}
            onChange={handleQuill}
            className="react-quill"
            theme="snow"
            style={{
              height: "fit-content",
              backgroundColor: "#f1f1f1",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              color: "black",
              width: "600px",
              paddingBottom: "15px",
              paddingTop: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
          <br />
          <br />
          <label>
            Tags
            <br />
            <p>
              Add one or more tags to describe what your post is about, press
              enter to add a new tag
            </p>
          </label>
          <TagsInput
            style={{
              backgroundColor: "#f1f1f1",
            }}
            inputProps={{
              placeholder: "Enter tags",
            }}
            className="tag-box react-tagsinput"
            maxTags={10}
            value={tags}
            onChange={handleChange}
          />
          <br />
          <br /> <br />
          <Button
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#01bf71",
              float: "right",
              color: "#fff",
              borderRadius: "30px",
              width: "fit-content",
              textTransform: "none",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "30px",
              paddingRight: "30px",
              marginTop: "-20px",
              fontSize: "15px",
              boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
            }}
          >
            {loading ? "Adding Post..." : "Post"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CommunityPostModal;
