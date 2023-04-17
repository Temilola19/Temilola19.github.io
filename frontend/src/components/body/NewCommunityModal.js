import React from "react";
import Modal from "./Modal";
import "../Styles/CreatePost.css";
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
import { selectUser } from "../../features/userSlice";
import axios from "axios";
const NewCommunityModal = ({
  openNewCommunityModal,
  setOpenNewCommunityModal,
}) => {
  // const [tags, setTags] = React.useState([]);
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  // const handleChange = (value) => {
  //   setTags(value);
  // };

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  // const [newTags, setNewTags] = React.useState([]);

  const navigate = useNavigate();

  const handleQuill = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name !== "" && description !== "") {
      setLoading(true);
      const bodyJSON = {
        name: name,
        description: description,
        user: user,
        image: image,
      };

      await axios
        .post("http://localhost/api/community", bodyJSON)
        .then((res) => {
          alert("Community added seccessfully");
          setLoading(false);
          setOpenNewCommunityModal(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <Modal open={openNewCommunityModal} style={{ marginTop: "30px" }}>
      <div className="postModal">
        <div>
          <IconButton
            className="close"
            onClick={() => setOpenNewCommunityModal(false)}
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
            Create your public Community
          </h2>
        </div>
        <form>
          <label>
            Name
            <br />
            <p>Name your Community!</p>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
          />
          <br />
          <br />
          <br />
          <label>
            Description
            <br />
            <p>Provide more information about your community</p>
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
            value={description}
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
          <label htmlFor="image">Choose an image:</label>
          <input
            type="file"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            accept="image/jpeg, image/png"
          ></input>
          <br />
          <br />
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
            {loading ? "Creating Community..." : "Create"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default NewCommunityModal;
