import React from "react";
import "./assets/css/modal.css"


function Modal({ photo, onClose }) {

    const modalStyle = {
        left: `${photo.x}px`,
        top: `${photo.y}px`,
      };
    
  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img
          src={photo.img_src}
          alt={`Rover ${photo.rover.name} - ${photo.camera.full_name}`}
          style={{ width: "400px", height: "404px" }}
        />
        <div className="modal-info">
          <h3>Informações da Foto</h3>
          <p>Câmera: {photo.camera.full_name}</p>
          <p>Data: {photo.earth_date}</p>
          <p>Rover Status: {photo.rover.status}</p>
          {/* Adicione mais informações conforme necessário */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
