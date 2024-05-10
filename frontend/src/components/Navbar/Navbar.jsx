import React from "react";
import "./Navbar.css";
import logo_new from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../Assets/menu.png";
import cross from "../Assets/cross.png";

const Navbar = () => {
  const location = useLocation();

  let isNavOpen = false;
  function toggleNav() {
    const navMenu = document.querySelector(".nav-menu");
    const closeButton = document.querySelector(".menu-icons .fa-times");
    const menuButton = document.querySelector(".menu-icons .fa-bars");
    if (isNavOpen) {
      navMenu.classList.remove("nav-open");
      isNavOpen = false;
      closeButton.style.display = "none";
      menuButton.style.display = "block";
    } else {
      navMenu.classList.add("nav-open");
      isNavOpen = true;
      closeButton.style.display = "block";
      menuButton.style.display = "none";
    }
  }

  const closeBlock = () => {
    closeButton.style.display = "none";
    menuButton.style.display = "block";
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav-logo">
          <img src={logo_new} alt="" />
          {/* <h1>HERITAGE WORLD</h1> */}
        </div>
      </Link>

      {/* <div className="menu-icons" onClick={toggleNav}>
        <span
          className="material-symbols-outlined fa-bars"
          style={{ color: "white" }}
        >
          menu
        </span>
        <span
          className="material-symbols-outlined fa-times"
          style={{ color: "white" }}
        >
          close
        </span>
      </div> */}
      <div className="menu-icons" onClick={toggleNav}>
        <img src={menu} className="material-symbols-outlined fa-bars" alt="" />
        <img src={cross} className="material-symbols-outlined fa-times" alt="" />
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="navlink" onClick={() => closeBlock()}>
            HOME
          </Link>
        </li>

        <li>
          <Link to="/about" className="navlink" onClick={() => closeBlock()}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/explore" className="navlink" onClick={() => closeBlock()}>
            MONUMENTS
          </Link>
        </li>
        {location.pathname.includes("/login") ? (
          <li>
            <Link
              to="/register"
              className="navlink"
              onClick={() => closeBlock()}
            >
              REGISTER
            </Link>
          </li>
        ) : null}
        {location.pathname.includes("/register") ? (
          <li>
            <Link to="/login" className="navlink" onClick={() => closeBlock()}>
              LOGIN
            </Link>
          </li>
        ) : null}

        {location.pathname !== "/register" &&
          location.pathname !== "/login" && (
            <>
              <li>
                <Link
                  to="/register"
                  className="navlink"
                  onClick={() => closeBlock()}
                >
                  REGISTER
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="navlink"
                  onClick={() => closeBlock()}
                >
                  LOGIN
                </Link>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
