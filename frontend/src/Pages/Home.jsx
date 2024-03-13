import React from 'react';
import SecondSection from '../components/SecondSection/SecondSection';
import LastSection from '../components/LastSection/LastSection';
import Hero from '../components/Hero/Hero';
import img1 from '../components/Assets/tajmahal.jpg';
import img2 from '../components/Assets/pexels-pixabay-290386.jpg';
import img3 from '../components/Assets/tajgate.jpg';
import img4 from '../components/Assets/head.jpg';
import img5 from '../components/Assets/pexels-pixabay-218480.jpg';

const Home = () => {

    const images = [img1,img2,img3,img4,img5];
    const herohead = ['Taj Mahal', 'Miskhal masjid','Temple', 'Red Fort', 'Qutub Minar']
return (
<>
    <Hero images={images}/>
    <SecondSection/>
    <LastSection/>
</>
)
}

export default Home;
