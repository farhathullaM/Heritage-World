import React, {useEffect, useState} from 'react';
import './CSS/Placedetails.css';
import { useParams } from 'react-router-dom';
import star from '../components/Assets/star.png';
import one from '../components/Assets/pexels-pixabay-290386.jpg';
import two from '../components/Assets/tajgate.jpg';
import three from '../components/Assets/tajmahal.jpg';
import four from '../components/Assets/pexels-fuzail-ahmad-9208715.jpg';
import axios from "axios";

const ReadMore = ({ children }) => {
  const text = children || '';
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (
      <p className="text">
          {isReadMore ? text.slice(0, 600) : text}
          <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "rgba(153, 153, 153, 1)" }}
          >
              {isReadMore ? " Read more..." : " Show less"}
          </span>
      </p>
  );
};

const Placedetails = () => {

    const { placeId } = useParams();

    const [monument, setMonument] = useState(null)

    useEffect(() => {
      axios
        .get(`monuments/${placeId}`)
        .then(response => {
          setMonument(response.data);
        })
        .catch((error) => {
          console.error("Error fetching monument details:", error);
        });
    }, [placeId]);
    

  return (
    <div className="place-details">
      {monument && (
        <>
        <div className="place-img">
        <img src={axios.defaults.baseURL + monument.cover_image} alt="" />
        <div className='name-loc'>
          <h2>{monument.title}</h2>
          <div className='locatn'>
            <span className="material-symbols-outlined">explore</span> 
            <div><p>{monument.place}, {monument.state}</p></div>
          </div>
        </div>
      </div>

      <div className="importance">
        <div className="top">
          <img src={star} alt="" />
          <h4>Importance</h4>
        </div>
       <p>{monument.ipms_place}</p>
      </div>

      <div className="about-monument">
        <h4>About Monument</h4>
        <div className="line"></div>
        <ReadMore>{monument.description}</ReadMore>
      </div>

      <div className="about-monument">
        <h4>PAST CONDITION</h4>
        <div className="line"></div>
        <ReadMore>{monument.past_condition}</ReadMore>
      </div>

      <div className="about-monument">
        <h4>PRESENT CONDITION</h4>
        <div className="line"></div>
        <ReadMore>{monument.present_condition}</ReadMore>
      </div>

      <div className="arch-imp">
        <h4>Architectural Importance</h4>
        <p>{monument.archi_imps}</p>
      </div>

      <div className='gallery'> 
        <h4>GALLERY</h4>
        <div className="line"></div>
      </div>

      <div className='pagethree'>
        <div className="img-container">

          <div className="img-1">
            <img className='img1' src={one} alt="" />
            <div className="detail">
            <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>

          <div className="img-2">
            <img className='img2'src={two} alt="" />
            <div className="detail">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>

          <div className="img-3">
            <img className='img3'src={three} alt="" />
            <div className="detail">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>     
          
          <div className="img-4">
            <img className='img4'src={four} alt="" />
            <div className="detail">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>     
                 
        </div>

        <div className="map-div">
          <div className="map">
            
          </div>
        </div>
    </div>
    </>
    )}
    </div>
  )
}

export default Placedetails;