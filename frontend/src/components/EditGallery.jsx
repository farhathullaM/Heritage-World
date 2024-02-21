import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

const EditGallery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const imageRef = useRef(null);
  const [galleryData, setGalleryData] = useState({
    imgTitle: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`gallery/${id}`)
      .then((res) => {
        setGalleryData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching gallery data:", err);
      });
  }, [id]);

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imgTitle", e.target.imgTitle.value);
    formData.append("description", e.target.description.value);
    formData.append("image", imageRef.current.files[0]);

    axios
      .put(`gallery/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Gallery Updated");
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
            <input
              name="imgTitle"
              type="text"
              id="imgTitle"
              defaultValue={galleryData.imgTitle}
            />
          </div>

          <div className="inp">
            <label htmlFor="des">Description</label>
            <textarea
              name="description"
              id="des"
              defaultValue={galleryData.description}
            />
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

export default EditGallery;
