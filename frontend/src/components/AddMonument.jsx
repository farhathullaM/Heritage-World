import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddMonument = () => {
  const navigate = useNavigate();
  const monumentEndpoint = "http://localhost:3001/monuments/";

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
      .post(monumentEndpoint, data)
      .then((res) => {
        alert("Monument Created");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form onSubmit={submit}>
      <div className="inp">
        <label htmlFor="title">Title</label>
        <input name="title" type="text" id="title" />
      </div>
      <div className="inp">
        <label htmlFor="shdes">Short Description</label>
        <textarea name="shortdescription" id="shdes" />
      </div>
      <div className="inp">
        <label htmlFor="des">Description</label>
        <textarea name="description" id="des" />
      </div>

      <div className="inp">
        <label htmlFor="nat">Nation</label>
        <input name="nation" type="text" id="nat" />
      </div>
      <div className="inp">
        <label htmlFor="state">State</label>
        <input name="state" type="text" id="state" />
      </div>
      <div className="inp">
        <label htmlFor="place">Place</label>
        <input name="place" type="text" id="place" />
      </div>
      <div className="sub">
        <input type="submit" />
      </div>
    </form>
  );
};

export default AddMonument;
