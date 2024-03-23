import React from "react";
import "./About.css";
import aboutimg from "../Assets/aboutusimg.jpg";
import img from "../Assets/head.jpg";
import { useState } from "react";
import data from "../Assets/data.js";

const About = () => {


  return (
    <div className="about">
        <img src={aboutimg} alt="" />
    </div>
  );
};

export default About;
