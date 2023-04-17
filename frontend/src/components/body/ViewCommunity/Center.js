import React from "react";
import image from "../../images/pexels-christina-morillo-1181467.jpg";
import "../../Styles/communityStyle.css";
import "../../Styles/PostStyle.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import ReactHtmlParser from "react-html-parser";
import CommunityPost from "./CommunityPost";

const Center = () => {
  const [communityData, setCommunityData] = useState();
  const [communityQuestion, setCommunityQuestion] = useState("");
  const user = useSelector(selectUser);

  //openPostModal = { openPostModal };

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("c");

  useEffect(() => {
    async function getCommunityDetails() {
      await axios
        .get(`http://localhost/api/community/${id}`)
        .then((res) => {
          console.log(res.data[0]);
          setCommunityData(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCommunityDetails();
  }, [id]);

  async function getUpdatedCommunityQuestion() {
    await axios
      .get(`http://localhost/api/community/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setCommunityData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="containeropen">
          <img
            src={image}
            alt="Snow"
            style={{
              margin: "0",
              width: "100%",
              height: "100%",

              opacity: "0.4",
              objectFit: "cover",
            }}
          ></img>
          <p className="name">{communityData?.name}</p>
        </div>

        <div className="container-community">
          {" "}
          <div className="about-community">
            <p className="head">About {communityData?.name}</p>
            <p className="descriptions">
              {" "}
              {ReactHtmlParser(communityData?.description)}
            </p>

            <p className="members">
              {communityData?.members?.length + 1} members
            </p>
            <p className="created">
              Created {new Date(communityData?.created_at).toLocaleString()} by{" "}
              <span style={{ color: "#7d7d7d" }}>
                {communityData?.user?.displayName
                  ? communityData?.user?.displayName
                  : String(communityData?.user?.email).split("@")[0]}
              </span>
            </p>
            <Button
              //onClick={() => setOpenCommunityModal(true)}
              // href="/ViewCommunity"
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
                marginTop: "10px",
                boxShadow: " 0px 10px 20px #bf4a0140",
              }}
            >
              Delete
            </Button>
          </div>
          <div style={{ marginTop: "30px", textAlign: "right" }}>
            <CommunityPost />
            {communityData?.communityQuestionsDetails?.map((_cq) => (
              <div className="all-postss">
                <div className="posts" key={_cq?._id}>
                  <Link
                    //to={"/OpenCommunity"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="post-title">{_cq?.title}</div>
                  </Link>

                  <div className="post-info">
                    <Avatar
                      style={{ height: "20px", width: "20px" }}
                      src={_cq?.user?.photo}
                    />
                    <div className="user-name">
                      {_cq?.user?.displayName
                        ? _cq?.user?.displayName
                        : String(_cq?.user?.email).split("@")[0]}
                    </div>
                    <div className="time-of-post">
                      {" "}
                      {new Date(_cq?.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div className="post-body">{_cq?.body}</div>
                  <div className="post-tag">{JSON.parse(_cq?.tags[0])}</div>

                  <div className="post-reaction">
                    <div className="post-likes">
                      <IconButton>
                        <FavoriteIcon
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#afafaf",
                          }}
                        />
                      </IconButton>
                      <p>10 likes</p>
                    </div>

                    <div className="post-comments">
                      <IconButton>
                        <CommentIcon
                          style={{
                            color: "#afafaf",
                            height: "20px",
                            width: "20px",
                          }}
                        />
                      </IconButton>
                      <p>{_cq?.comments} comments</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div
              className="leaderboard"
              style={{
                backgroundColor: "white",
                marginTop: "50px",
                padding: "30px",
                width: "250px",
                margin: "auto",
                marginLeft: "0",
                marginRight: "0",
                borderRadius: "30px",
              }}
            >
              <h1
                style={{
                  textAlign: "left",
                  color: "#01bf71",
                  fontSize: "15px",
                  marginBottom: "40px",
                  fontWeight: "500",
                }}
              >
                LeaderBoard
              </h1>
              <div
                style={{
                  textAlign: "center",
                  whiteSpace: "no-wrap",
                  fontSize: "11px",
                  display: "flex",
                  width: "250px",
                  columnGap: "30px",
                  marginRight: "0",
                  justifyContent: "center",
                  margin: "auto",
                  alignItems: "center",
                }}
              >
                <div>
                  <EmojiEventsIcon
                    style={{ height: "30px", width: "30px", color: "	#c0c0c0" }}
                  />
                  <p>@Gina</p>
                  <p style={{ color: "	#afafaf", fontSize: "10px" }}>300</p>
                </div>
                <div>
                  <EmojiEventsIcon
                    style={{ height: "40px", width: "40px", color: "#d4af37" }}
                  />
                  <p>@Temilola Afolabi</p>
                  <p style={{ color: "	#afafaf", fontSize: "10px" }}>700</p>
                </div>
                <div>
                  <EmojiEventsIcon
                    style={{ height: "20px", width: "20px", color: "#cd7f32" }}
                  />
                  <p>@Angel7</p>
                  <p style={{ color: "	#afafaf", fontSize: "10px" }}>100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
