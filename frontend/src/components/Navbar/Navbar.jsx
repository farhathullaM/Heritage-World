import React from 'react';
import './Navbar.css';
import logo_new from '../Assets/image.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let isNavOpen = false;
function toggleNav(){
    const navMenu = document.querySelector(".nav-menu")
    const closeButton = document.querySelector(".menu-icons .fa-times")
    const menuButton = document.querySelector(".menu-icons .fa-bars")
    if(isNavOpen){
        
        navMenu.classList.remove("nav-open")
        isNavOpen = false
        closeButton.style.display = "none"
        menuButton.style.display = "block"
    } 
    else{
        
        navMenu.classList.add("nav-open")
        isNavOpen = true
        closeButton.style.display = "block"
        menuButton.style.display = "none"
    } 
}

return (
    <nav className='navbar'>
        <Link to='/' style={{textDecoration: 'none'}}>
        <div className="nav-logo">
            <img src={logo_new} alt="" />
            <h1>MONUMENTS</h1>
        </div>
        </Link>

        <div className="menu-icons" onClick={toggleNav}>
            <i className='fa-solid fa-bars fa-lg' style={{color: 'white'}}></i>
            <i className='fa-solid fa-times fa-lg' style={{color: 'white'}}></i>
        </div>

        <ul className='nav-menu'>
            <li> <Link to='/' className='navlink'> HOME </Link> </li>
            
            <li> <Link to='/about' className='navlink'>  ABOUT US </Link> </li>
            <li> <Link to='/' className='navlink'>  BLOGS </Link> </li>
            <li> <Link to='/admin/login' className='navlink'> LOGIN </Link> </li>
        </ul>

    </nav>
)
}

export default Navbar;
