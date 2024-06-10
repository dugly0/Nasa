import React from "react";

function Photo({ photo, onClick }) {
  // Este componente representa uma única foto na galeria
  return (
    // Container da foto, utiliza a classe 'card' do Bootstrap para um visual esteticamente agradável
    <div className="card" onClick={onClick}>
      {/* Renderiza a imagem */}
      <img
        src={photo.img_src} // URL da imagem obtida da API da NASA
        className="card-img-top" // Classe do Bootstrap para posicionar a imagem no topo do card
        style={{ width: "200px", height: "200px" }} // Estilo inline para definir as dimensões da imagem
        alt={`Rover ${photo.rover.name} - ${photo.camera.full_name}`} // Texto alternativo para acessibilidade, descrevendo a imagem
        onClick={onClick} // Manipulador de evento de clique, passado como prop
      />
    </div>
  );
}

export default Photo; // Exporta o componente para ser usado em outros arquivos
