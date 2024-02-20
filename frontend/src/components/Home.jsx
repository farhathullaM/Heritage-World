import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/monuments/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteMonument(id) {
    let isDel = confirm("Confirm Delete");
    if (isDel) {
      axios
        .delete(`http://localhost:3001/monuments/${id}`)
        .then((res) => {
          setData((currentData) => currentData.filter((m) => m._id != id));
        })
        .catch((err) => {
          alert("Delete Error: Could not be deleted");
        });
    }
  }
  return (
    <div className="container">
      <div className="topbar">
        <div className="main-head">Monuments</div>
        <Link to={"/monument/create"}>
          <button className="btn">Create</button>
        </Link>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>short Description</th>
              <th>Description</th>
              <th>Place</th>
              <th>State</th>
              <th>Location</th>
              <th>Importance</th>
              <th>Gallery</th>
              <th>
                <span className="material-symbols-outlined tool">
                  more_vert
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((monument, index) => (
              <tr key={monument._id}>
                <td>{index + 1}</td>
                <td>{monument.title}</td>
                <td>{monument.shortdescription}</td>
                <td>{monument.description}</td>
                <td>{monument.place}</td>
                <td>{monument.state}</td>
                <td>{monument.location}</td>
                <td>{monument.ipms_place}</td>
                <td className="icons">
                  <div className="tool-con">
                    <Link to={`/Gallery/${monument._id}`}>
                      <span className="material-symbols-outlined tool gal">
                        photo_library
                      </span>
                    </Link>
                  </div>
                </td>
                <td className="icons">
                  <div className="tool-con">
                    <Link to={`/monument/edit/${monument._id}`}>
                      <span className="material-symbols-outlined tool edit">
                        edit_square
                      </span>
                    </Link>
                    <span
                      className="material-symbols-outlined tool del"
                      onClick={() => deleteMonument(monument._id)}
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

export default Home;
