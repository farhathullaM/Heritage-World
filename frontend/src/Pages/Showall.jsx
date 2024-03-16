import { React,  useState, useEffect } from 'react';
import './CSS/Showall.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import backcover from '../components/Assets/taj_mahal_cover.jpg'

const Showall = () => {

  const [loading, setLoading] = useState(true)
  const [monumentList, setMonumentList] = useState([]);
  const navigate = useNavigate();
 
  //  useEffect(() => {
  //   setLoading(true);
  //    fetch('https://farhathullam.github.io/json-api/all_places.json')
  //      .then(res => res.json())
  //      .then(data => setMonumentList(data))
  //      .catch(error => console.error(error))
  //      .finally(() => setLoading(false));
  //    },[]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("monuments/")
      .then((res) => {
        setMonumentList(res.monumentList);
        console.log(res.monumentList)
      })
      .catch((err) => console.error(err.response.setMonumentList.message))
      .finally(() => setLoading(false));
  }, []);


     const handleItemClick = (placeId) => {
      window.scrollTo(0,0);
      navigate(`/places/${placeId}`)
     }

  return (
    <div className='showall'>
      <div className="back_cover">
        <img src={backcover} alt="" />
        <div className="search-box"> 
          <input type="text" placeholder='Search here...'/>
          <div className="search-icon-box">
          <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>

      <div className="every-places">
      {loading ? 'Loading...' :(
          <div className="each-places">
            {monumentList && monumentList.map(item => (
              
              <div className="item" key={item._id} onClick={() => handleItemClick(item._id)}>
                <img src={item.cover_image} alt="" />
                <p className='title'>{item.title}</p>
                <p className='place'>
                  <span class="material-symbols-outlined">explore</span> 
                  <div> {item.place}, {item.state}</div> 
                </p>
              </div>
              
            ))}
          </div>
        )}
      </div>

    </div>

  )
}

export default Showall;
