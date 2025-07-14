import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import { image } from "../data/user";



function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
