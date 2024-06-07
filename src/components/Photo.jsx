import React from "react";

function Photo({ photo, onClick }) {
  return (
    <div className="card" onClick={onClick}> 
      <img
        src={photo.img_src}
        className="card-img-top"
        style={{ width: "200px", height: "200px" }}
        alt={`Rover ${photo.rover.name} - ${photo.camera.full_name}`}
        onClick={onClick} 
      />
    </div>
  );
}

export default Photo;
