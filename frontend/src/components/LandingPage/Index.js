import React from "react";
import About from "./About";
import Features from "./Features";
import LandingHome from "./LandingHome";
import LFooter from "./LFooter";
import Signup from "./Signup";
import { animateScroll } from "react-scroll";

const Index = () => {
  return (
    <div>
      <LandingHome />
      <About />
      <Features />
      <Signup />
      <LFooter />
    </div>
  );
};

export default Index;
