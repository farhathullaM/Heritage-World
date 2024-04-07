import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  if (!localStorage.getItem("token")) navigate("/login");

  useEffect(() => {
    axios
      .get(`/gallery/monument/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function deleteGallery(id) {
    let isDel = confirm("Confirm Delete");
    if (isDel) {
      axios
        .delete(`/gallery/${id}`)
        .then((res) => {
          setData((currentData) =>
            currentData.filter((gallery) => gallery._id !== id)
          );
        })
        .catch((err) => {
          alert("Delete Error: Could not be deleted");
        });
    }
  }

  function handleItemClick(placeId) {
    navigate(`/places/${placeId}`);
  }

  return (
    <div className="container">
      <div className="topbar">
        <div className="main-head">Gallery</div>
        <div className="double-btn">
          <button className="btn" onClick={() => handleItemClick(id)}>
            Monument
          </button>
          <Link to={`/manage/gallery/create/${id}`}>
            <button className="btn">Create</button>
          </Link>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              {/* <th>Short Description</th> */}
              <th>Media</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((gallery, index) => (
              <tr key={gallery._id}>
                <td>{index + 1}</td>
                <td>{gallery.imgTitle}</td>
                {/* <td>{gallery.description}</td> */}
                <td>
                  {gallery.image && gallery.image.startsWith("data:video") ? (
                    <video className="image-display" controls>
                      <source src={gallery.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={gallery.image}
                      alt="Gallery Media"
                      className="image-display"
                    />
                  )}
                </td>
                <td className="icons">
                  <div className="tool-con">
                    <Link to={`/manage/gallery/edit/${gallery._id}`}>
                      <span className="material-symbols-outlined tool edit">
                        edit_square
                      </span>
                    </Link>
                    <span
                      className="material-symbols-outlined tool del"
                      onClick={() => deleteGallery(gallery._id)}
                    >
                      delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Gallery;
