import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/NavBar/Navbar";
import Question from "./components/ViewQuestion";
import AddPost from "./Pages/AddPost";
import Home from "./Pages/Home";
import Post from "./Pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="AddPost" element={<AddPost />} />
          <Route path="ViewQuestion" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
