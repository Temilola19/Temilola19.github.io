import React from "react";
import "../Styles/Navbar.css";
import { Avatar, IconButton, Button } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LinearProgress from "@mui/material/LinearProgress";

const BodyRight = () => {
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <div>
      <div className="body">
        <div className="cardD-title">
          <h1>Daily Quests</h1>
        </div>
        <div className="quests">
          <div className="quest">
            <Avatar
              style={{ backgroundColor: "#f1f1f1", color: "#d4af37" }}
              variant="rounded"
            >
              <EmojiEventsIcon />
            </Avatar>
            <div className="quest-info">
              <div className="quest-title">Make a post</div>
              <div className="quest-progress">
                <LinearProgress
                  style={{
                    backgroundColor: "#f1f1f1",
                    height: "10px",
                    borderRadius: "10px",
                    width: "120px",
                    marginTop: "5px",
                  }}
                  variant="determinate"
                  value={50}
                />
              </div>
            </div>
          </div>
          <div className="quest">
            <Avatar
              style={{ backgroundColor: "#f1f1f1", color: "#d4af37" }}
              variant="rounded"
            >
              <EmojiEventsIcon />
            </Avatar>
            <div className="quest-info">
              <div className="quest-title">Make a post</div>
              <div className="quest-progress">
                <LinearProgress
                  style={{
                    backgroundColor: "#f1f1f1",
                    height: "10px",
                    borderRadius: "10px",
                    width: "120px",
                    marginTop: "5px",
                  }}
                  variant="determinate"
                  value={50}
                />
              </div>
            </div>
          </div>
          <div className="quest">
            <Avatar
              style={{ backgroundColor: "#f1f1f1", color: "#d4af37" }}
              variant="rounded"
            >
              <EmojiEventsIcon />
            </Avatar>
            <div className="quest-info">
              <div className="quest-title">Make a post</div>
              <div className="quest-progress">
                <LinearProgress
                  style={{
                    backgroundColor: "#f1f1f1",
                    height: "10px",
                    borderRadius: "10px",
                    width: "120px",
                    marginTop: "5px",
                  }}
                  variant="determinate"
                  value={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="body">
        <div className="cardP-title">
          <h1>Popular Tags</h1>

          {/* <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#01bf71",
              justifyItem: "center",
              color: "#fff",
              borderRadius: "30px",
              width: "150px",
              textTransform: "none",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "35px",
              paddingRight: "35px",
              marginTop: "10px",
              fontSize: "12px",
              boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
            }}
          >
            See all
          </Button> */}
        </div>
        <div className="popular-tags">
          <p className="tag">Javascript</p>
          <p className="tag">Reactjs</p>
          <p className="tag">Cosc 305</p>
          <p className="tag">Kotlin</p>
          <p className="tag">Flutter</p>
          <p className="tag">CSS</p>
        </div>
      </div>
    </div>
  );
};

export default BodyRight;
