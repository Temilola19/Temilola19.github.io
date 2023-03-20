import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/NavBar/Navbar";
import Question from "./components/ViewQuestion";
import { auth } from "./firebase";

import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Post from "./Pages/Post";
import Community from "./Pages/Community";
import Communities from "./Pages/Community";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Element {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={user ? "/home" : "/"}
            element={user ? <Home /> : <LogIn />}
          />
          <Route
            path="ViewQuestion"
            element={
              user ? (
                <Post />
              ) : (
                <Navigate
                  to={{
                    pathname: "/",
                    state: {
                      from: "/ViewQuestion",
                    },
                  }}
                />
              )
            }
          />
          <Route exact path="/Community" element={<Communities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
