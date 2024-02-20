import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const AddGallery = () => {
  const navigate = useNavigate();
  const galleryEndpoint = "http://localhost:3001/gallery/";

  function submit(e) {
    e.preventDefault();
    const data = {
        imgTitle: imgTitle.value,
      description: des.value,
      image: image.value,
      
    };
    axios
      .post(galleryEndpoint, data)
      .then((res) => {
        alert("Galley Created");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="formcon">
      <div className="formcard">
        <form onSubmit={submit}>
          <div className="inp">
            <label htmlFor="imgTitle">Title</label>
            <input name="imgTitle" type="text" id="imgTitle" />
          </div>

        
          <div className="inp">
            <label htmlFor="des">Description</label>
            <textarea name="description" id="des" />
          </div>
          
          
          <div className="inp">
            <label htmlFor="image">
            Image
            </label>
            <input
              name="image"
              type="file"
              id="image"
            />
          </div>
   

          <div className="sub">
            <input type="submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGallery;
