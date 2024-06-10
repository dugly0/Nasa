import React from "react";
import "./assets/css/photo.css";

function Photo({ photo, onClick }) {
  // Este componente representa uma única foto na galeria
  return (
    // Container da foto, utiliza a classe 'card' do Bootstrap para um visual esteticamente agradável
    <div className="card" id="card-foto" onClick={onClick}>
      {/* Renderiza a imagem */}
      <img
        src={photo.img_src} // URL da imagem obtida da API da NASA
        className="card-img-top" // Classe do Bootstrap para posicionar a imagem no topo do card
        alt={`Rover ${photo.rover.name} - ${photo.camera.full_name}`} // Texto alternativo para acessibilidade, descrevendo a imagem
        onClick={onClick} // Manipulador de evento de clique, passado como prop
      />
    </div>
  );
}

export default Photo; // Exporta o componente para ser usado em outros arquivos
