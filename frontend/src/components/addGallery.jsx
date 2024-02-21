import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

const AddGallery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const imageRef = useRef(null);

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imgTitle", e.target.imgTitle.value);
    formData.append("description", e.target.description.value);
    formData.append("image", imageRef.current.files[0]);

    axios
      .post(`gallery/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Gallery Created");
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
            <label htmlFor="image">Image/Video</label>
            <input name="image" type="file" id="image" ref={imageRef} />
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
