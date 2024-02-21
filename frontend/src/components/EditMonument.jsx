import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Form.css";

const EditMonument = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [monument, setMonument] = useState({});
  useEffect(() => {
    axios
      .get(`monuments/${id}`)
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
      location: loc.value,
      ipms_place: ipms_place.value,
      archi_imps: archi_imps.value,
      hst_chronology: hst_chronology.value,
      past_condition: past_condition.value,
      present_condition: present_condition.value,
    };
    console.log(data);
    axios
      .put(`monuments/${id}`, data)
      .then((res) => {
        alert("Monument updated");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="formcon">
      <div className="formcard">
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
            <label htmlFor="nat">Nation</label>
            <input
              name="nation"
              type="text"
              id="nat"
              defaultValue={monument.nation}
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
            <label htmlFor="shdes">Short Description</label>
            <textarea
              name="shortdescription"
              id="shdes"
              defaultValue={monument.shortdescription}
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
          <div className="inp">
            <label htmlFor="loc">location</label>
            <input
              name="location"
              type="text"
              id="loc"
              defaultValue={monument.location}
            />
          </div>

          <div className="inp">
            <label htmlFor="ipms_place">Importance of a Place</label>
            <input
              name="ipms_place"
              type="text"
              id="ipms_place"
              defaultValue={monument.ipms_place}
            />
          </div>
          <div className="inp">
            <label htmlFor="archi_imps">Architecheral Importance</label>
            <input
              name="archi_imps"
              type="text"
              id="archi_imps"
              defaultValue={monument.archi_imps}
            />
          </div>
          <div className="inp">
            <label htmlFor="place">Historical Chronology</label>
            <input
              name="hst_chronology"
              type="text"
              id="hst_chronology"
              defaultValue={monument.hst_chronology}
            />
          </div>

          <div className="inp">
            <label htmlFor="past_condition">Past Condition of Place</label>
            <input
              name="past_condition"
              type="text"
              id="past_condition"
              defaultValue={monument.past_condition}
            />
          </div>
          <div className="inp">
            <label htmlFor="present_condition">
              Present Condition of a Place
            </label>
            <input
              name="present_condition"
              type="text"
              id="present_condition"
              defaultValue={monument.present_condition}
            />
          </div>
          <div className="sub">
            <input type="submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMonument;
