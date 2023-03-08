import React from "react";
import { Avatar, Button } from "@mui/material";
import "../Styles/Navbar.css";
const NewPosts = () => {
  return (
    <div>
      <div className="newPost">
        <div className="post-grid">
          <Avatar />
          <input type="text" placeholder="Create a thread" />
          <Button
            href="/AddPost"
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#01bf71",
              color: "#fff",
              borderRadius: "30px",
              width: "25px",
              height: "fit-content",
              paddingTop: "10px",
              paddingBottom: "10px",
              textTransform: "lowercase",
              paddingLeft: "40px",
              paddingRight: "40px",
              boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
            }}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
