import React from "react";
import "./SecondSection.css";
import img1 from "../Assets/st_angelo_fort.png";
import img2 from "../Assets/kapparatti_bhavanam.jpg";
import { Link } from "react-router-dom";
import arrow from "../Assets/right-arrow.png";

const SecondSection = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="second-section">
      <div className="section-1">
        <div className="image-sec">
          <img className="sec-img" src={img1} alt="" />
        </div>
        <div className="details-sec">
          <h2>St.Angelo Fort</h2>
          <p>
            The first Portuguese Viceroy in India Don Francesco de Almeida
            constructed this massive triangular Laterite structure. In 1663 the
            Dutch captured the fort from the Portuguese and reinforced its
            fortifications. It was later sold to a native king, Ali raja of
            Arakkal, in the year 1772. In 1790, the British took control of the
            fort, renovated it and used it as their chief military base in
            Malabar till 1947.Features: Main architectural features are gigantic
            bastions, fortification walls, watch tower, a chapel, laterite stair
            ways, remains of an early oil lamp light house, army barracks,
            underground stone path ways, cannons etc. Now the fort is protected
            by the Archaeological Survey of India.
          </p>
          <Link
            to="/places/65f5c8c8de4a16e914e2f889"
            style={{ textDecoration: "none" }}
          >
            <button onClick={() => handleClick()} className="more-btn">
              More
              <img src={arrow} className="arrow-img" alt="" />
            </button>
          </Link>
        </div>
      </div>

      <div className="section-2">
        <div className="details-sec">
          <h2>Kapparatti Bhavanam</h2>
          <p>
            Built by the noted Malayalam writer and the author of the first
            Malayalam short story, Vengayil Kunjuraman Nayanar. The house is
            also known as Vengayil Madam. An architecture marvel with more than
            120 rooms. Ample use of wood for the construction made it an
            excellent example of Kerala tharavads.Now functioning as a Christian
            seminary.
          </p>
          <Link
            to="/places/65f5ca98de4a16e914e2f89e"
            style={{ textDecoration: "none" }}
          >
            <button onClick={() => handleClick()} className="more-btn">
              More
              <img src={arrow} className="arrow-img" alt="" />
            </button>
          </Link>
        </div>
        <div className="image-sec">
          <img className="sec-img" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
