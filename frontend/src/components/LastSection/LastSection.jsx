import React from "react";
import one from "../Assets/pexels-pixabay-290386.jpg";
import two from "../Assets/tajgate.jpg";
import three from "../Assets/tajmahal.jpg";
import "./LastSection.css";
import { Link } from "react-router-dom";

const LastSection = () => {
  return (
    <div className="last-section">
      <div className="page-head">
        <h3>Newly Addedd Places</h3>
      </div>
      <div className="image-container">
        <div className="image-con">
          <img className="img-one" src={one} alt="" />
          <div className="details">
            <div className="line"></div>
            <h2>Miskhal Masjid</h2>
            <p>
              Mishkal Mosque is a medieval mosque located in Calicut on Malabar
              Coast, souther India. The mosque, one of the few surviving
              medeival mosques in Keerala, is regarded as an important cultural,
              historical and archtectural monument of Kerala
            </p>
          </div>
        </div>

        <div className="image-con">
          <img className="img-two" src={two} alt="" />
          <div className="details">
            <div className="line"></div>
            <h2>Miskhal Masjid</h2>
            <p>
              Mishkal Mosque is a medieval mosque located in Calicut on Malabar
              Coast, souther India. The mosque, one of the few surviving
              medeival mosques in Keerala, is regarded as an important cultural,
              historical and archtectural monument of Kerala
            </p>
          </div>
        </div>

        <div className="image-con">
          <img className="img-three" src={three} alt="" />
          <div className="details">
            <div className="line"></div>
            <h2>Miskhal Masjid</h2>
            <p>
              Mishkal Mosque is a medieval mosque located in Calicut on Malabar
              Coast, souther India. The mosque, one of the few surviving
              medeival mosques in Keerala, is regarded as an important cultural,
              historical and archtectural monument of Kerala
            </p>
          </div>
        </div>
      </div>
      <div className="more-btn-div">
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <button className="more-btn">
            More{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LastSection;
