import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    axios
      .delete(`http://localhost:3001/monuments/${id}`)
      .then((res) => {
        setData((currentData) => currentData.filter((m) => m._id != id));
      })
      .catch((err) => {
        alert("Delete Error: Could not be deleted");
      });
  }
  return (
    <>
      <div className="topbar">
        <Link to={"/monument/create"}>
          <button className="btn">Create</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>short Description</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((monument, index) => (
            <tr key={monument._id}>
              <td>{index + 1}</td>
              <td>{monument.title}</td>
              <td>{monument.shortdescription}</td>
              <td>{monument.description}</td>
              <td>
                <Link to={`/monument/edit/${monument._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteMonument(monument._id)}>
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

export default Home;
