import React, { useState, useEffect } from "react";
import axios from "axios";
import Rover from "./Rover";

// Chave da API da NASA (substitua pelo seu valor real)
// Essa chave é essencial para autenticar as requisições à API da NASA
const apiKey = "c5YgeeEB3PAyTU6rojZEg39t4mcWeHEZKJUD1dgy";

function RoverList() {
  // Estado para armazenar os dados dos rovers obtidos da API
  // Inicialmente, o estado é um array vazio, que será preenchido com os dados dos rovers
  const [rovers, setRovers] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os dados de um rover específico da API da NASA
    const fetchRoverData = async (roverName) => {
      try {
        // Realiza a requisição GET à API da NASA, passando o nome do rover e a chave da API
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${apiKey}`
        );
        // Extrai os dados do manifest do rover da resposta da API
        // O manifest contém informações sobre a missão do rover
        return response.data.photo_manifest;
      } catch (error) {
        // Em caso de erro na requisição, exibe uma mensagem de erro no console
        console.error(`Erro ao buscar dados do rover ${roverName}:`, error);
        // Retorna null para indicar que houve um erro ao buscar os dados do rover
        return null;
      }
    };

    // Função assíncrona para buscar os dados de todos os rovers em paralelo, com um pequeno atraso entre as requisições
    const fetchRoversWithDelay = async () => {
      // Array com os nomes dos rovers que serão buscados
      const roverNames = ["curiosity", "opportunity", "spirit"];
      // Array para armazenar as promessas de cada requisição
      const roverPromises = roverNames.map(fetchRoverData);

      // Aguarda todas as promessas serem resolvidas (ou rejeitadas)
      const allRoverData = await Promise.all(roverPromises);
      // Filtra o array `allRoverData` para remover os valores null (que indicam erros nas requisições)
      // O resultado é um array com os dados dos rovers que foram obtidos com sucesso
      setRovers(allRoverData.filter(Boolean));
    };

    // Chama a função para buscar os dados dos rovers
    fetchRoversWithDelay();
  }, []); // Array de dependências vazio garante que o useEffect seja executado apenas uma vez (após a montagem inicial do componente)

  return (
    // Renderiza o conteúdo da página
    <div className="container mt-5">
      {/* Título da página */}
      <h1 className="text-center mb-4">Rovers em Marte</h1>

      {/* Cria um grid com 3 colunas (col-md-4) para exibir os cards dos rovers */}
      <div className="row">
        {rovers.map((rover) => (
          <div key={rover.name} className="col-md-4 mb-4">
            {/* Renderiza o componente Rover para cada rover, passando os dados do rover como prop */}
            <Rover rover={rover} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoverList;
