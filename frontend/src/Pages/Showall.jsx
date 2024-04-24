import { React, useState, useEffect } from "react";
import "./CSS/Showall.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backcover from "../components/Assets/taj_mahal_cover.jpg";

const Showall = () => {
  const [loading, setLoading] = useState(true);
  const [monumentList, setMonumentList] = useState([]);
  const [filteredMonumentList, setFilteredMonumentList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/public")
      .then((res) => {
        setMonumentList(res.data);
        // Initialize filtered list with all monuments
        setFilteredMonumentList(res.data);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        alert(err.response.data.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Function to handle search query changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the monument list based on the search query
    const filteredList = monumentList.filter(
      (monument) =>
        monument.title.toLowerCase().includes(query) ||
        monument.place.toLowerCase().includes(query) ||
        monument.state.toLowerCase().includes(query) ||
        monument.nation.toLowerCase().includes(query)
    );
    setFilteredMonumentList(query === "" ? monumentList : filteredList);
  };

  //function to navigate to the selected object
  const handleItemClick = (placeId) => {
    window.scrollTo(0, 0);
    navigate(`/places/${placeId}`);
  };

  return (
    <div className="showall">
      <div className="back_cover">
        <img src={backcover} alt="" />

        <div className="search-box">
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="search-icon-box">
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>

      <div className="every-places">
        {loading ? (
          <div className="loading-indicator">
            <div className="loading-box"></div>
            <div className="loading-box"></div>
            <div className="loading-box"></div>
            <div className="loading-box"></div>
          </div>
        ) : (
          <div className="each-places">
            {filteredMonumentList.map((item) => (
              <div
                className="item"
                key={item._id}
                onClick={() => handleItemClick(item._id)}
              >
                <img src={item.imageUrl} alt="" />
                <p className="title">{item.title}</p>
                <div className="place">
                  <span className="material-symbols-outlined">explore</span>
                  <p>
                    {item.place}, {item.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Showall;
