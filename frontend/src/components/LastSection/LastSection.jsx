import React from 'react';
import one from '../Assets/pexels-pixabay-290386.jpg';
import two from '../Assets/tajgate.jpg';
import three from '../Assets/tajmahal.jpg';
import './LastSection.css';

const LastSection = () => {
  
  return (
    <div className='last-section'>
        <div className="page-head">
            <h3>Newly Addedd Places</h3>
        </div>
        <div className="image-container">

          <div className="img-one-div">
            <img className='img-one' src={one} alt="" />
            <div className="details">
            <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>

          <div className="img-two-div">
            <img className='img-two'src={two} alt="" />
            <div className="details">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>

          <div className="img-three-div">
            <img className='img-three'src={three} alt="" />
            <div className="details">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>            
            
        </div>
        <div className="more-btn-div">
        <button onClick={window.scrollTo(0,0)} className='more-btn'>More <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default LastSection;