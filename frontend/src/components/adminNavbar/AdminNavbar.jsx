import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import './AdminNavbar.css'

const AdminNavbar = () => {
    const navigate = useNavigate();
  const location = useLocation();

    const logout = (e) => {
        localStorage.removeItem("token");
        navigate("/admin/login");
      };
  return (
    <div className="admin-navbar">
        <div className="head">Historical Monuments</div>
        {location.pathname === "/admin/login" ? (
          <button className="btn" onClick={() => navigate("/admin/register")}>
            Register
          </button>
        ) : location.pathname === "/admin/register" ? (
          <button className="btn" onClick={() => navigate("/admin/login")}>
            Login
          </button>
        ) : (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
  )
}

export default AdminNavbar
