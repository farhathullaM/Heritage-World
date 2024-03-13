import React, { useState, useEffect} from 'react';
import './CSS/Showall.css';
import { useNavigate } from 'react-router-dom';
import backcover from '../components/Assets/taj_mahal_cover.jpg'

const Showall = () => {

  const [loading, setLoading] = useState(true)
  const [monumentList, setMonumentList] = useState([]);
  const navigate = useNavigate();
 
   useEffect(() => {
    setLoading(true);
     fetch('https://farhathullam.github.io/json-api/all_places.json')
       .then(res => res.json())
       .then(data => setMonumentList(data))
       .catch(error => console.error(error))
       .finally(() => setLoading(false));
     },[]);

     const handleItemClick = (placeId) => {
      navigate(`/places/${placeId}`)
     }

  return (
    <div className='showall'>
      <div className="back_cover">
        <img src={backcover} alt="" />
        <div className="search-box"> 
          <input type="text" placeholder='Search here...'/>
          <div className="search-icon-box">
          <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>

      <div className="every-places">
      {loading ? 'Loading...' :(
          <div className="each-places">
            {monumentList && monumentList.map(item => (
              
              <div className="item" key={item.id} onClick={() => handleItemClick(item.id)}>
                <img src={item.image} alt="" />
                <p className='title'>{item.name}</p>
                <p className='place'><i className="fa-solid fa-location-dot"></i> {item.place}, {item.state}</p>
              </div>
              
            ))}
          </div>
        )}
      </div>

    </div>

  )
}

export default Showall;
