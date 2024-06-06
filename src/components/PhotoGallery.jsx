import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Photo from "./Photo";

const apiKey = "c5YgeeEB3PAyTU6rojZEg39t4mcWeHEZKJUD1dgy";

function PhotoGallery() {
  const { roverName } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=3&api_key=${apiKey}`
      )
      .then((response) => {
        // Filtrar apenas as fotos com URLs válidas para imagens
        const validPhotos = response.data.photos.filter(
          (photo) =>
            photo.img_src.startsWith("http") &&
            !photo.img_src.includes("science.nasa.gov")
        );
        setPhotos(validPhotos);
      })
      .catch((error) => {
        console.error("Erro ao buscar fotos:", error);
      });
  }, [roverName]);

  return (
    <div className="container mt-5">
      <h2>Fotos do Rover {roverName} (Sol 1)</h2>
      <div className="row">
        {photos.map((photo) => (
          <div key={photo.id} className="col-md-3 mb-4">
            <Photo photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default PhotoGallery;
