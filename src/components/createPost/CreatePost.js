import { React, useState } from "react";
import "../Styles/CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Avatar, Button } from "@mui/material";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import postimg from "../images/undraw_publish_post_re_wmql.svg";
import Grid from "@mui/material/Unstable_Grid2";

const CreatePost = () => {
  const [tags, setTags] = useState([]);

  const handleChange = (value) => {
    setTags(value);
  };
  return (
    <div>
      <div className="post-container">
        <h1>Create your public post</h1>
        <div className="flexbox">
          <div className="create-post-con">
            <form>
              <label>
                Title
                <br />
                <p>Your Title should be specific and eye catching!</p>
              </label>
              <br />
              <input className="input" type="text" />
              <br />
              <br />
              <br />
              <label>
                Body
                <br />
                <p>Provide more information about your title</p>
              </label>
              <br />
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
                className="react-quill"
                theme="snow"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                  color: "black",
                  height: "200px",
                }}
              />
              <br />
              <br />
              <label>
                Tags
                <br />
                <p>
                  Add one or more tags to describe what your post is about,
                  press enter to add a new tag
                </p>
              </label>
              <br />
              <TagsInput
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
                href="/AddPost"
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
                  paddingLeft: "45px",
                  paddingRight: "45px",
                  marginTop: "-20px",
                  fontSize: "15px",
                  boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
                }}
              >
                Post
              </Button>
            </form>
          </div>

          {/* <img src={postimg} /> */}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
