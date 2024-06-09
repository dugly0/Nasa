import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RoverList from "./components/RoverList";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<RoverList />} />
        <Route path="/rover/:roverName" element={<PhotoGallery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
