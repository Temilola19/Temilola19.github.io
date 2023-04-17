import React from "react";
import { Avatar, Button } from "@mui/material";
import PostModal from "./CommunityPostModal";
// import "../Styles/CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import "../../Styles/Navbar.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CommunityPostModal from "./CommunityPostModal";

const CommunityPost = ({ handleSubmit }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [tags, setTags] = useState([]);

  // const handleChange = (value) => {
  //   setTags(value);
  // };

  const [openPostModal, setOpenPostModal] = useState(false);
  return (
    <div>
      <div className="newPost">
        {openPostModal && openPostModal && (
          <CommunityPostModal
            //handleSubmit={handleSubmit}
            openPostModal={openPostModal}
            setOpenPostModal={() => setOpenPostModal(false)}
          />
        )}
        <Button
          onClick={() => setOpenPostModal(true)}
          // href="/AddPost"
          variant="contained"
          size="small"
          style={{
            backgroundColor: "#01bf71",
            color: "#fff",
            borderRadius: "30px",
            width: "fit-content",
            height: "fit-content",
            paddingTop: "10px",
            paddingBottom: "10px",
            textTransform: "lowercase",
            paddingLeft: "30px",
            paddingRight: "30px",
            boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
          }}
        >
          Create Post
          <AddIcon
            style={{
              width: "15px",
              height: "15px",
              paddingLeft: "5px",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default CommunityPost;
