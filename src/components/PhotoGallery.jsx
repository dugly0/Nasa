import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Photo from "./Photo/Photo";
import Modal from "./Modal";

// Chave da API da NASA
const apiKey = "c5YgeeEB3PAyTU6rojZEg39t4mcWeHEZKJUD1dgy";

// Número de fotos por página
const photosPerPage = 25;

function PhotoGallery() {
  // Obtém o nome do rover da URL usando useParams
  const { roverName } = useParams();

  // Estado para armazenar as fotos do rover
  const [photos, setPhotos] = useState([]);
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para armazenar a foto selecionada para o modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Efeito colateral que busca as fotos do rover da API da NASA
  useEffect(() => {
    axios
      // Requisição à API, especificando o roverName e a chave da API
      // Usa o sol 3786 como exemplo, ajuste conforme necessário
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=3786&api_key=${apiKey}`
      )
      .then((response) => {
        // Filtra as fotos para remover URLs inválidas
        // (URLs que não começam com http ou que levam para a página da NASA)
        const validPhotos = response.data.photos.filter(
          (photo) =>
            photo.img_src.startsWith("http") &&
            !photo.img_src.includes("science.nasa.gov")
        );

        // Atualiza o estado com as fotos válidas
        setPhotos(validPhotos);
      })
      .catch((error) => {
        console.error("Erro ao buscar fotos:", error);
      });
  }, [roverName]); // O efeito é executado apenas quando o roverName muda

  // Função para lidar com o clique em uma foto
  const handlePhotoClick = (photo, event) => {
    // Calcula a posição do modal com base na posição da foto clicada
    const photoRect = event.target.getBoundingClientRect();
    const modalX = photoRect.left + window.scrollX;
    const modalY = photoRect.top + window.scrollY;

    // Atualiza o estado com a foto selecionada e sua posição
    setSelectedPhoto({ ...photo, x: modalX, y: modalY });
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  // Lógica de paginação
  const indexOfLastPhoto = currentPage * photosPerPage; // Índice da última foto da página atual
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage; // Índice da primeira foto da página atual
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto); // Fotos da página atual

  // Função para atualizar a página atual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      {/* Título da página */}
      <h2>Fotos do Rover {roverName} (Sol 3786)</h2>

      {/* Grid de fotos */}
      <div className="row">
        {currentPhotos.map((photo) => (
          <div key={photo.id} className="col-md-3 mb-4">
            {/* Renderiza o componente Photo para cada foto da página atual */}
            <Photo photo={photo} onClick={(e) => handlePhotoClick(photo, e)} />
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="pagination">
        {/* Botão para ir para a página anterior */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {/* Exibe a página atual e o total de páginas */}
        <span>
          Página {currentPage} de {Math.ceil(photos.length / photosPerPage)}
        </span>
        {/* Botão para ir para a próxima página */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPhoto >= photos.length} // Desabilita se estiver na última página
        >
          Próximo
        </button>
      </div>

      {/* Modal */}
      {/* Renderiza o modal apenas se uma foto estiver selecionada */}
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default PhotoGallery;
