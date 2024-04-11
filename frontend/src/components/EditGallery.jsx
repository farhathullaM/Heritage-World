import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";
import imgIcon from "../static/img.svg";
import ClipLoader from "react-spinners/ClipLoader";

const EditGallery = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) navigate("/login");

  const [filename, setFilename] = useState("No file chosen");
  const { id } = useParams();
  const imageRef = useRef(null);
  const [galleryData, setGalleryData] = useState({
    imgTitle: "",
    image: "",
  });
  const [thumbnail, setThumbnail] = useState(imgIcon);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  function setImgSrc(files) {
    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function () {
        document.querySelector(".file-image-display").src = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }
  }

  function handleChange(e) {
    const { name, value, files } = e.target;
    const sizeLimit = 100;
    if (files[0].size > 1048576 * sizeLimit) {
      alert(`File is too big!, Maximum file size should be ${sizeLimit}MB`);
      this.value = "";
      return;
    }
    setFilename(files[0].name);
    setImgSrc(files);
    setGalleryData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));

    if (files[0].type.startsWith("video")) {
      setThumbnail(URL.createObjectURL(files[0]));
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  }

  useEffect(() => {
    axios
      .get(`gallery/${id}`)
      .then((res) => {
        const { data } = res;
        setGalleryData(res.data);
        if (data.image) {
          // Assuming data.image is the Base64 string
          if (data.image.endsWith(".mp4")) setIsVideo(true);
          setThumbnail(data.imageUrl);
          setFilename(data.imgTitle); // Assuming data.imgTitle contains the filename
        }
      })
      .catch((err) => {
        console.error(
          "Error fetching gallery data:",
          err.response.data.message
        );
      });
  }, [id]);

  function submit(e) {
    e.preventDefault();
    setIsSubmit((current) => !current);

    const formData = new FormData();
    formData.append("imgTitle", e.target.imgTitle.value);
    formData.append("image", imageRef.current.files[0]);

    axios
      .put(`gallery/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Gallery Updated");
        navigate(`/manage/gallery/${galleryData.monumentId}`);
      })
      .catch((err) => {
        alert(err);
        setIsSubmit((current) => !current);
      });
  }

  return (
    <div className="formcon">
      <div className="formcard">
        <div className="head">Edit Gallery </div>
        <form onSubmit={submit}>
          <div className="inp">
            <label htmlFor="imgTitle" className="required">
              Title
            </label>
            <input
              name="imgTitle"
              type="text"
              id="imgTitle"
              defaultValue={galleryData.imgTitle}
              required
            />
          </div>

          <div className="inp">
            <label htmlFor="image" className="required">
              Image/Video
            </label>
            <div className="fileSelect">
              <div className="filebtncon">
                <label htmlFor="image" className="fileopen btn">
                  <span>Open file</span>
                </label>
                <p className="filename">{filename}</p>
                <br />
                <span>Maximum size: 100 MB</span>
              </div>
              <input
                name="image"
                type="file"
                id="image"
                accept="image/*, video/*"
                onChange={handleChange}
                ref={imageRef}
              />

              {imageRef.current?.files[0] &&
              imageRef.current.files[0].type.startsWith("video") ? (
                <video controls className="file-image-display">
                  <source src={thumbnail} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : thumbnail && isVideo ? (
                <video controls className="file-image-display">
                  <source src={thumbnail} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="file-image-display"
                />
              )}
            </div>
          </div>

          <div className="sub">
            {isSubmit ? (
              <div className="inp load">
                <ClipLoader
                  color="blue"
                  cssOverride={true}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <input type="submit" className="btn" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGallery;
