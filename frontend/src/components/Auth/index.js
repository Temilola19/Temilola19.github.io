import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import Home from "../../Pages/Home";
import "../Styles/Navbar.css";
import "../Styles/AuthStyle.css";
import { Link, useNavigate } from "react-router-dom";
import googleimg from "../images/icons8-google.svg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
const Auth = () => {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignInGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      navigate("/Home");
      console.log(res);
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (email === "" || password === "" || username === "") {
      setError("Required Field is missing");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setError("");
          setLoading(false);
          navigate("/Home");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("Required Field is missing");
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setError("");
          console.log(res);
          navigate("/Home");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="auth">
      <div className="auth-container">
        {signup ? (
          <>
            <p className="logo">
              tech<span className="special">Space</span>
            </p>
            <h3>Sign Up</h3>
            <p className="sub">
              Get started with us today. Already have an
              <br /> account with us?
              <span className="signup-link">
                <Link
                  onClick={() => setSignup(!signup)}
                  style={{ textDecoration: "none", color: "#01bf71" }}
                >
                  {" "}
                  Log in here
                </Link>
              </span>
            </p>
            <form>
              <label>Username</label>
              <br />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
              <br />
              <br />
              <label>Email Address</label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <br />
              <br />
              <label>Password</label>
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <br /> <br />
              <div className="division">
                <hr />
                <p>Or</p>
                <hr />
              </div>
              <div onClick={handleSignInGoogle} className="google">
                <img src={googleimg} alt="google" />
                <p>Sign Up with Google</p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <Button
                onClick={handleSignUp}
                disabled={loading}
                href="/Home"
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
                  paddingLeft: "45px",
                  paddingRight: "45px",
                  marginTop: "-20px",
                  fontSize: "15px",
                  boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
                }}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <p className="logo">
              tech<span className="special">Space</span>
            </p>
            <h3>Log In</h3>
            <p className="sub">
              Pick up right where you left off. Oops you don't
              <br /> have an account with us?
              <span className="signup-link">
                <Link
                  onClick={() => setSignup(!signup)}
                  style={{ textDecoration: "none", color: "#01bf71" }}
                >
                  {" "}
                  Sign up here
                </Link>
              </span>
            </p>
            <form>
              <label>Email Address</label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <br />
              <br />
              <label>Password</label>
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <br /> <br />
              <div className="division">
                <hr />
                <p>Or</p>
                <hr />
              </div>
              <div onClick={handleSignInGoogle} className="google">
                <img src={googleimg} alt="google" />
                <p>Log in with Google</p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <Button
                onClick={handleSignIn}
                disabled={loading}
                href="/Home"
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
                  paddingLeft: "45px",
                  paddingRight: "45px",
                  marginTop: "-20px",
                  fontSize: "15px",
                  boxShadow: " 0px 10px 20px rgba(37, 176, 35, 0.2)",
                }}
              >
                {loading ? "Logging In... " : "Login"}
              </Button>
            </form>
          </>
        )}
        {error !== " " && (
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
