import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Avatar, IconButton, Button } from "@mui/material";
import { deepOrange, green, grey } from "@mui/material/colors";

import "../Styles/communityStyle.css";
import NewCommunity from "./NewCommunity";

const Community = () => {
  return (
    <div>
      <div className="com-con">
        <NewCommunity />

        <div className="container">
          <h1>Your Communities</h1>
          <div className="com-container">
            <div className="com-info">
              <Avatar
                sx={{
                  bgcolor: grey[400],
                }}
                variant="rounded"
              ></Avatar>

              <div className="community-info">
                <p className="name">UI/UX</p>
                <p className="members">30 members</p>
                <p className="description">
                  This is a community created for UI/UX designers to help and
                  learn form one another.
                </p>
              </div>
            </div>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/AddPost"
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
          <div className="com-container">
            <div className="com-info">
              <Avatar
                sx={{
                  bgcolor: grey[400],
                }}
                variant="rounded"
              ></Avatar>

              <div className="community-info">
                <p className="name">UI/UX</p>
                <p className="members">30 members</p>
                <p className="description">
                  This is a community created for UI/UX designers to help and
                  learn form one another.
                </p>
              </div>
            </div>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/AddPost"
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
          <div className="com-container">
            <div className="com-info">
              <Avatar
                sx={{
                  bgcolor: grey[400],
                }}
                variant="rounded"
              ></Avatar>

              <div className="community-info">
                <p className="name">UI/UX</p>
                <p className="members">30 members</p>
                <p className="description">
                  This is a community created for UI/UX designers to help and
                  learn form one another.
                </p>
              </div>
            </div>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/AddPost"
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
        <div className="container">
          <h1>All Communities</h1>
          <div className="com-container">
            <div className="com-info">
              <Avatar
                sx={{
                  bgcolor: grey[400],
                }}
                variant="rounded"
              ></Avatar>

              <div className="community-info">
                <p className="name">UI/UX</p>
                <p className="members">30 members</p>
                <p className="description">
                  This is a community created for UI/UX designers to help and
                  learn form one another.
                </p>
              </div>
            </div>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/AddPost"
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#bf9901",
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
                boxShadow: " 0px 10px 20px #bf990140",
              }}
            >
              Leave
            </Button>
          </div>
        </div>
        <div className="container">
          <h1>Browse Communities</h1>
          <div className="com-container">
            <div className="com-info">
              <Avatar
                sx={{
                  bgcolor: grey[400],
                }}
                variant="rounded"
              ></Avatar>

              <div className="community-info">
                <p className="name">UI/UX</p>
                <p className="members">30 members</p>
                <p className="description">
                  This is a community created for UI/UX designers to help and
                  learn form one another.
                </p>
              </div>
            </div>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/AddPost"
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#01bf71",
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
                boxShadow: " 0px 10px 20px #01bf7140",
              }}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
