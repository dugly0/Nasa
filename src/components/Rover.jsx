import React from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router para criar links navegáveis

function Rover({ rover }) {
  // Componente funcional que recebe um objeto 'rover' como prop
  return (
    <div className="card">
      {" "}
      {/* Renderiza um card do Bootstrap para exibir as informações do rover */}
      <div className="card-body">
        {/* Título do card com o nome do rover */}
        <h5 className="card-title">{rover.name}</h5>
        {/* Informações do rover formatadas em um parágrafo */}
        <p className="card-text">
          <strong>Status:</strong> {rover.status}{" "}
          {/* Exibe o status atual do rover (ativo, completo, etc.) */}
          <br />
          <strong>Data de Lançamento:</strong> {rover.launch_date}{" "}
          {/* Exibe a data de lançamento do rover */}
          <br />
          <strong>Data de Pouso:</strong> {rover.landing_date}{" "}
          {/* Exibe a data de pouso do rover em Marte */}
          <br />
          <strong>Total de fotos:</strong> {rover.total_photos}{" "}
          {/* Exibe o número total de fotos tiradas pelo rover */}
        </p>
      </div>
      <div className="card-footer">
        {" "}
        {/* Rodapé do card para conter o botão/link */}
        {/* Link para a página de fotos do rover */}
        <Link
          to={`/rover/${rover.name}`} // O destino do link é dinâmico, baseado no nome do rover
          className="btn btn-primary" // Estiliza o link como um botão primário do Bootstrap
        >
          Ver Fotos {/* Texto do botão */}
        </Link>
      </div>
    </div>
  );
}

export default Rover; // Exporta o componente Rover para ser utilizado em outros arquivos
