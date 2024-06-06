import React from "react";

function Rover({ rover }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{rover.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {rover.status}
          <br />
          <strong>Data de Lançamento:</strong> {rover.launch_date}
          <br />
          <strong>Data de Pouso:</strong> {rover.landing_date}
          <br />
          <strong>Total de fotos</strong> {rover.total_photos}
          {/* Adicione mais informações relevantes aqui */}
        </p>
      </div>
    </div>
  );
}

export default Rover;
