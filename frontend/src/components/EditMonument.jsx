import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMonument = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [monument, setMonument] = useState({});
  const monumentEndpoint = `http://localhost:3001/monuments/${id}`;
  useEffect(() => {
    axios
      .get(monumentEndpoint)
      .then((res) => {
        setMonument(res.data);
      })
      .catch((err) => {
        alert(err);
        navigate("/");
      });
  });

  function submit(e) {
    e.preventDefault();
    const data = {
      title: title.value,
      shortdescription: shdes.value,
      description: des.value,
      nation: nat.value,
      state: state.value,
      place: place.value,
    };
    axios
      .put(monumentEndpoint, data)
      .then((res) => {
        alert("Monument updated");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={submit}>
      <div className="inp">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          id="title"
          defaultValue={monument.title}
        />
      </div>
      <div className="inp">
        <label htmlFor="shdes">Short Description</label>
        <textarea
          name="shortdescription"
          id="shdes"
          value={monument.shortdescription}
        />
      </div>
      <div className="inp">
        <label htmlFor="des">Description</label>
        <textarea
          name="description"
          id="des"
          defaultValue={monument.description}
        />
      </div>

      <div className="inp">
        <label htmlFor="nat">Nation</label>
        <input
          name="nation"
          type="text"
          id="nat"
          defaultValue={monument.nation}
        />
      </div>
      <div className="inp">
        <label htmlFor="state">State</label>
        <input
          name="state"
          type="text"
          id="state"
          defaultValue={monument.state}
        />
      </div>
      <div className="inp">
        <label htmlFor="place">Place</label>
        <input
          name="place"
          type="text"
          id="place"
          defaultValue={monument.place}
        />
      </div>
      <div className="sub">
        <input type="submit" />
      </div>
    </form>
  );
};

export default EditMonument;
