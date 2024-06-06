import React from "react";

function Photo({ photo }) {
  return (
    <div className="photo-container">
      <img
        src={photo.img_src}
        alt={photo.camera.full_name}
        className="img-thumbnail"
        style={{ width: "200px", height: "200px" }}
      />
      <div className="photo-info">
        <p>Sol: {photo.sol}</p>
        <p>Câmera: {photo.camera.name}</p>
      </div>
    </div>
  );
}

export default Photo;
