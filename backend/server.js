const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;

//db connection

//middleware
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bosyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

//headers
app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// api

//static resources

app.use("/upload", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! error occurred");
  }
});

//cors
app.use(cors());

//server listen
app.listen(PORT, () => {
  console.log(`TechSpace is running on PORT No-${PORT}`);
});
