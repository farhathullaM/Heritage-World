import Home from "./components/Home";
import AddMonument from "./components/AddMonument";
import EditMonument from "./components/EditMonument";
import Gallery from "./components/gallery";
import AddGallery from "./components/addGallery";
import EditGallery from "./components/EditGallery";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monument/create" element={<AddMonument />} />
      <Route path="/monument/edit/:id" element={<EditMonument />} />
      <Route path="/gallery/:id" element={<Gallery />} />
      <Route path="/gallery/create/:id" element={<AddGallery />} />
      <Route path="/gallery/edit/:id" element={<EditGallery />} />
    </Routes>
  );
}

export default App;
