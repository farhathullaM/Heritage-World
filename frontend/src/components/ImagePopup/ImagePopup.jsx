import React from "react";
import "./ImagePopup.css";
import cross from "../Assets/cross.png";

const ImagePopup = ({ clickedImg, setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        {/* <span className="dismiss" onClick={handleClick}>
          X
        </span> */}
        <div className="crossimg">
        <img src={cross} className="dismiss" onClick={handleClick} alt="" />
        </div>
      </div>
    </>
  );
};

export default ImagePopup;
