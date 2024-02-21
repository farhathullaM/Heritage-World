import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

const EditMonument = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const monumentEndpoint = `monuments/${id}`;
  const [monument, setMonument] = useState({
    title: "",
    shortdescription: "",
    description: "",
    nation: "",
    state: "",
    place: "",
    location: "",
    ipms_place: "",
    archi_imps: "",
    hst_chronology: "",
    past_condition: "",
    present_condition: "",
    cover_image: null,
  });
  const [oldCoverImage, setOldCoverImage] = useState(""); // State variable for old cover image URL

  useEffect(() => {
    axios
      .get(monumentEndpoint)
      .then((res) => {
        const { data } = res;
        setMonument(data);
        setOldCoverImage(data.cover_image); // Store the old cover image URL
      })
      .catch((err) => {
        console.error("Error fetching monument:", err);
      });
  }, [monumentEndpoint]);

  function handleChange(e) {
    const { name, value, files } = e.target;
    setMonument((prevMonument) => ({
      ...prevMonument,
      [name]: files ? files[0] : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", monument.title);
    formData.append("shortdescription", monument.shortdescription);
    formData.append("description", monument.description);
    formData.append("nation", monument.nation);
    formData.append("state", monument.state);
    formData.append("place", monument.place);
    formData.append("location", monument.location);
    formData.append("ipms_place", monument.ipms_place);
    formData.append("archi_imps", monument.archi_imps);
    formData.append("hst_chronology", monument.hst_chronology);
    formData.append("past_condition", monument.past_condition);
    formData.append("present_condition", monument.present_condition);
    formData.append("cover_image", monument.cover_image);

    axios
      .put(monumentEndpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Monument Updated");
        navigate("/");
      })
      .catch((err) => {
        alert("Error updating monument: " + err);
      });
  }

  return (
    <div className="formcon">
      <div className="formcard">
        <form onSubmit={handleSubmit}>
          <div className="inp">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              id="title"
              value={monument.title}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="shortdescription">Short Description</label>
            <textarea
              name="shortdescription"
              id="shortdescription"
              value={monument.shortdescription}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={monument.description}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="nation">Nation</label>
            <input
              name="nation"
              type="text"
              id="nation"
              value={monument.nation}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="state">State</label>
            <input
              name="state"
              type="text"
              id="state"
              value={monument.state}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="place">Place</label>
            <input
              name="place"
              type="text"
              id="place"
              value={monument.place}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="location">Location</label>
            <input
              name="location"
              type="text"
              id="location"
              value={monument.location}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="ipms_place">Importance of a Place</label>
            <input
              name="ipms_place"
              type="text"
              id="ipms_place"
              value={monument.ipms_place}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="archi_imps">Architectural Importance</label>
            <input
              name="archi_imps"
              type="text"
              id="archi_imps"
              value={monument.archi_imps}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="hst_chronology">Historical Chronology</label>
            <input
              name="hst_chronology"
              type="text"
              id="hst_chronology"
              value={monument.hst_chronology}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="past_condition">Past Condition of Place</label>
            <input
              name="past_condition"
              type="text"
              id="past_condition"
              value={monument.past_condition}
              onChange={handleChange}
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
              value={monument.present_condition}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="cover_image">Cover Image</label>
            <input
              name="cover_image"
              type="file"
              id="cover_image"
              onChange={handleChange}
            />
          
              <div className="old-cover-image">
                <img src={monument.cover_image} alt="Old Cover Image" />
              </div>
            
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
