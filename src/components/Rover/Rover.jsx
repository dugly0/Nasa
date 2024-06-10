import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/rover.css";

function Rover({ rover }) {
  let cardClassName = 'card';

  // Adiciona a classe correspondente ao rover
  if (rover.name === 'Spirit') {
    cardClassName += ' card-spirit';
  } else if (rover.name === 'Opportunity') {
    cardClassName += ' card-opportunity';
  } else if (rover.name === 'Curiosity') {
    cardClassName += ' card-curiosity';
  }

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `skew(-10deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'skew(-10deg) rotateX(0) rotateY(0)';
  };

  return (
    <div className="card-container">
      <div
        className={cardClassName}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-content">
          <div className="card-body">
            <h5 className="card-title">{rover.name}</h5>
            <p className="card-text">
              <strong>Status:</strong> {rover.status}
              <br />
              <strong>Data de Lançamento:</strong> {rover.launch_date}
              <br />
              <strong>Data de Pouso:</strong> {rover.landing_date}
              <br />
              <strong>Total de fotos:</strong> {rover.total_photos}
            </p>
          </div>
          <div className="card-footer">
            <Link
              to={`/rover/${rover.name}`}
              className="btn btn-primary"
            >
              Ver Fotos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rover;
