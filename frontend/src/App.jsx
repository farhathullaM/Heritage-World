import Showall from "./Pages/Showall.jsx";
import Home from "./Pages/Home.jsx";
import Placedetails from "./Pages/Placedetails.jsx";

import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import AdminNavbar from "./components/adminNavbar/AdminNavbar.jsx";
import ListMonuments from "./components/ListMonuments/ListMonuments.jsx";
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
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }

  return (
    <>
      {location.pathname.includes("/admin/") ? <AdminNavbar /> : <Navbar />}

      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/ListMonuments" element={<ListMonuments />} />
        <Route path="/admin/monument/create" element={<AddMonument />} />
        <Route path="/admin/monument/edit/:id" element={<EditMonument />} />
        <Route path="/admin/gallery/:id" element={<Gallery />} />
        <Route path="/admin/gallery/create/:id" element={<AddGallery />} />
        <Route path="/admin/gallery/edit/:id" element={<EditGallery />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Showall />} />
        <Route path="/places/:placeId" element={<Placedetails />} />
      </Routes>
    </>
  );
}

export default App;
