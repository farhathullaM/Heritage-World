import React from "react";
import "./About.css";
import bg from "../Assets/bg.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_back">
        <img src={bg} alt="" />
        <div className="about-head">
          <h2>About Us</h2>
        </div>
      </div>

      <div className="about_details">
        <h6>About</h6>
        <p>
          The website entitled <span>Heritage World</span> is designed to
          identify and understand the rich architectural heritage of the World,
          especially India and Kerala which are unique for their great heritage
          monuments and is a rich store-house of pre-colonial and colonial
          architecture including prehistoric tombs, temples, homesteads,
          palaces, forts, bridges, mosques, churches, streets, colonial
          buildings, warehouses, etc. This site provides a glimpse of heritage
          vestiges of the world over and a visual treat to those who visit the
          site. The site also prioritizes the preservation and conservation of
          our heritage and brings official/public attention towards preserving
          them.
        </p>
      </div>
    </div>
  );
};

export default About;
