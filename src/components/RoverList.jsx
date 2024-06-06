import React, { useState, useEffect } from "react";
import axios from "axios";
import Rover from "./Rover";

const apiKey = "UkP62SGqoKArEczPmbVIu5O4S7HNiUcGV7VDOyaF";

function RoverList() {
  const [rovers, setRovers] = useState([]);

  useEffect(() => {
    const fetchRoverData = async (roverName) => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${apiKey}`
        );
        return response.data.photo_manifest;
      } catch (error) {
        console.error(`Erro ao buscar dados do rover ${roverName}:`, error);
        return null;
      }
    };

    const fetchRoversWithDelay = async () => {
      for (const roverName of ["curiosity", "opportunity", "spirit"]) {
        const roverData = await fetchRoverData(roverName);
        setRovers((prevRovers) => [...prevRovers, roverData].filter(Boolean));
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Atraso de 1 segundo
      }
    };

    fetchRoversWithDelay();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Rovers em Marte</h1>
      <div className="row">
        {rovers.map((rover) => (
          <div key={rover.name} className="col-md-4 mb-4">
            <Rover rover={rover} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoverList;
