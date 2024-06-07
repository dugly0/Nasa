import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Modal from "./Modal"; // Componente para o modal

const apiKey = "c5YgeeEB3PAyTU6rojZEg39t4mcWeHEZKJUD1dgy";
const photosPerPage = 25;

function PhotoGallery() {
  const { roverName } = useParams();
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=3786&api_key=${apiKey}`
      )
      .then((response) => {
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

  const handlePhotoClick = (photo, event) => {
    const photoRect = event.target.getBoundingClientRect();
    const modalX = photoRect.left + window.scrollX; // Coordenada X
    const modalY = photoRect.top + window.scrollY; // Coordenada Y

    setSelectedPhoto({ ...photo, x: modalX, y: modalY });
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2>Fotos do Rover {roverName} (Sol 3786)</h2>
      <div className="row">
        {currentPhotos.map((photo) => (
          <div key={photo.id} className="col-md-3 mb-4">
            <Photo photo={photo} onClick={(e) => handlePhotoClick(photo, e)} />
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {Math.ceil(photos.length / photosPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPhoto >= photos.length}
        >
          Próximo
        </button>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default PhotoGallery;
