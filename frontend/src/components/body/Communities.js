import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Avatar, IconButton, Button } from "@mui/material";
import { deepOrange, green, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "../Styles/communityStyle.css";
import NewCommunity from "./NewCommunity";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import ReactHtmlParser from "react-html-parser";

const Community = () => {
  const [communities, setCommunities] = React.useState([]);

  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  const user = useSelector(selectUser);
  React.useEffect(() => {
    async function getCommunity() {
      await axios
        .get("http://localhost/api/community")
        .then((res) => {
          console.log(res.data);
          setCommunities(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCommunity();
  }, []);

  return (
    <div>
      <div className="com-con">
        <NewCommunity />

        <div className="container">
          <h1>Your Communities</h1>
          {communities.map((community) => (
            <div key={community._id} className="com-container">
              <div className="com-info">
                <Avatar
                  src={community?.image}
                  sx={{
                    bgcolor: grey[400],
                  }}
                  variant="rounded"
                ></Avatar>

                <div className="community-info">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/ViewCommunity?c=${community?._id}`}
                  >
                    <div className="name">{community?.name}</div>
                  </Link>

                  <div className="members">
                    {community?.members?.length + 1} members
                  </div>
                  <div className="description">
                    {ReactHtmlParser(truncate(community?.description, 300))}
                  </div>
                </div>
              </div>
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
                  marginTop: "0",
                  boxShadow: " 0px 10px 20px #bf4a0140",
                }}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Community;
