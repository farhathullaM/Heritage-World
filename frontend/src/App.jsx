import Home from "./components/Home";
import AddMonument from "./components/AddMonument";
import EditMonument from "./components/EditMonument";
import Gallery from "./components/gallery";
import AddGallery from "./components/addGallery";
import EditGallery from "./components/EditGallery";
import Login from "./components/login";
import Register from "./components/register";

import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token"))
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
  }, []);

  const logout = (e) => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="head">Historical Monuments</div>
        {location.pathname === "/" ? (
          <button className="btn" onClick={() => navigate("/register")}>
            Register
          </button>
        ) : location.pathname === "/register" ? (
          <button className="btn" onClick={() => navigate("/")}>
            Login
          </button>
        ) : (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/monument/create" element={<AddMonument />} />
        <Route path="/monument/edit/:id" element={<EditMonument />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/gallery/create/:id" element={<AddGallery />} />
        <Route path="/gallery/edit/:id" element={<EditGallery />} />
      </Routes>
    </>
  );
}

export default App;
