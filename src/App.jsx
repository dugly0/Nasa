import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoverList from "./components/RoverList";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoverList />} />
        <Route path="/rover/:roverName" element={<PhotoGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
