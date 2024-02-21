import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Gallery = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`gallery/monument/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function deleteGallery(id) {
    let isDel = confirm("Confirm Delete");
    if(isDel){
    axios
      .delete(`gallery/${id}`)
      .then((res) => {
        setData((currentData) =>
          currentData.filter((gallery) => gallery._id !== id)
        ); // Use !== for comparison
      })
      .catch((err) => {
        alert("Delete Error: Could not be deleted");
      });
    }
  }

  return (
    <>
      <div className="topbar">
        <Link to={`/gallery/create/${id}`}>
          <button className="btn">Create</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Short Description</th>
            <th>Media</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((gallery, index) => (
            <tr key={gallery._id}>
              <td>{index + 1}</td>
              <td>{gallery.imgTitle}</td>
              <td>{gallery.description}</td>
              <td>
                {gallery.image && gallery.image.endsWith(".mp4") ? (
                  <video width="320" height="240" controls>
                    <source src={gallery.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={gallery.image} alt="Gallery Media" />
                )}
              </td>
              <td>
                <Link to={`/gallery/edit/${gallery._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteGallery(gallery._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Gallery;
