import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/";
// axios.defaults.baseURL = "https://heritage-world.onrender.com/";
axios.defaults.baseURL = "https://hwbackend-production.up.railway.app/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
