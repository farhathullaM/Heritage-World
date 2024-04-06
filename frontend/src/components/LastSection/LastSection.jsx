import React, { useState, useEffect } from "react";
import "./LastSection.css";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "../Assets/right-arrow.png";

const LastSection = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    axios
      .get("public/latest3")
      .then((response) => {
        setLatest(response.data);
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  }, []);

  return (
    <div className="last-section">
      <div className="page-head">
        <h3>Newly Addedd Places</h3>
      </div>
      <div className="image-container">
        {latest.map((item) => (
          <Link to={`/places/${item._id}`} className="image-con" key={item._id}>
            <img className="img-one" src={item.cover_image} alt="" />
            <div className="details">
              <div className="line"></div>
              <h2>{item.title}</h2>
              <p>
                {item.description.length > 300
                  ? item.description.slice(0, 300) + "....."
                  : item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="more-btn-div">
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <button className="more-btn">
            More
            <img src={arrow} className="arrow-img" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LastSection;
