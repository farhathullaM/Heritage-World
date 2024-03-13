import React from 'react';
import './About.css';
import aboutimg from '../Assets/aboutusimg.jpg';

const About = () => {
  return (
    <div className='about'>
       <img src={aboutimg} alt="" />
        <div className="home-txt">
            <h1>About us</h1>
            <a className='hide' href="/">Locality</a>
        </div>
    </div>
  )
}

export default About;
