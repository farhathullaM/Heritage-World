import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const AddMonument = () => {
  const navigate = useNavigate();
  const monumentEndpoint = "monuments/";

  function submit(e) {
    e.preventDefault();
    const data = {
      title: title.value,
      shortdescription: shdes.value,
      description: des.value,
      nation: nat.value,
      state: state.value,
      place: place.value,
      location: loc.value,
      ipms_place: ipms_place.value,
      archi_imps: archi_imps.value,
      hst_chronology: hst_chronology.value,
      past_condition: past_condition.value,
      present_condition: present_condition.value,
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
    <div className="formcon">
      <div className="formcard">
        <form onSubmit={submit}>
          <div className="inp">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" id="title" />
          </div>

          <div className="inp">
            <label htmlFor="nat">Nation</label>
            <input name="nation" type="text" id="nat" />
          </div>
          <div className="inp">
            <label htmlFor="des">Description</label>
            <textarea name="description" id="des" />
          </div>
          <div className="inp">
            <label htmlFor="shdes">Short Description</label>
            <textarea name="shortdescription" id="shdes" />
          </div>
          <div className="inp">
            <label htmlFor="state">State</label>
            <input name="state" type="text" id="state" />
          </div>
          <div className="inp">
            <label htmlFor="place">Place</label>
            <input name="place" type="text" id="place" />
          </div>
          <div className="inp">
            <label htmlFor="location">Location</label>
            <input name="location" type="text" id="loc" />
          </div>
          <div className="inp">
            <label htmlFor="ipms_place">Importance of a Place</label>
            <input name="ipms_place" type="text" id="ipms_place" />
          </div>
          <div className="inp">
            <label htmlFor="archi_imps">Architecheral Importance</label>
            <input name="archi_imps" type="text" id="archi_imps" />
          </div>
          <div className="inp">
            <label htmlFor="place">Historical Chronology</label>
            <input name="hst_chronology" type="text" id="hst_chronology" />
          </div>

          <div className="inp">
            <label htmlFor="past_condition">Past Condition of Place</label>
            <input name="past_condition" type="text" id="past_condition" />
          </div>
          <div className="inp">
            <label htmlFor="present_condition">
              Present Condition of a Place
            </label>
            <input
              name="present_condition"
              type="text"
              id="present_condition"
            />
          </div>
          {/* 
      <div className="inp">
        <label htmlFor="place">Place</label>
        <input name="place" type="text" id="place" />
      </div>
      <div className="inp">
        <label htmlFor="place">Place</label>
        <input name="place" type="text" id="place" />
      </div> 
      */}

          <div className="sub">
            <input type="submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMonument;
