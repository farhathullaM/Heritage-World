import Home from "./components/Home";
import AddMonument from "./components/AddMonument";
import EditMonument from "./components/EditMonument";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monument/create" element={<AddMonument />} />
      <Route path="/monument/edit/:id" element={<EditMonument />} />
      <Route path="/gallery/:id" element={<Gallery />} />
    </Routes>
  );
}

export default App;
