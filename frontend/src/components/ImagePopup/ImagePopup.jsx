import React from 'react';

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className="image-popup-overlay" onClick={onClose}>
      <div className="image-popup">
        <button className="close-btn" onClick={onClose}>Close</button>
        <img src={imageUrl} alt="Popup Image" />
      </div>
    </div>
  );
};

export default ImagePopup;
