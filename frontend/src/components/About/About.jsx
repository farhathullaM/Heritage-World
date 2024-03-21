import React from "react";
import "./About.css";
import aboutimg from "../Assets/aboutusimg.jpg";
import img from "../Assets/head.jpg";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useState } from "react";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="about">
      <img src={aboutimg} alt="" />
      <div className="home-txt">
        <h1>About us</h1>
      </div>
      <div className="abt-img">
        <button onClick={openPopup}>Open Popup</button>
        {showPopup && (
          <ImagePopup onClose={closePopup}>
            <img src={img} alt="" />
          </ImagePopup>
        )}
      </div>
    </div>
  );
};

export default About;
