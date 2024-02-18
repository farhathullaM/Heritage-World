import Home from "./components/Home";
import AddMonument from "./components/AddMonument";
import EditMonument from "./components/EditMonument";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monument/create" element={<AddMonument />} />
      <Route path="/monument/edit/:id" element={<EditMonument />} />
    </Routes>
  );
}

export default App;
