import React, { useState, useEffect } from "react";
import axios from "axios";
import Rover from "./Rover";

const apiKey = "c5YgeeEB3PAyTU6rojZEg39t4mcWeHEZKJUD1dgy";

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
        const allRoverData = await Promise.all([
          fetchRoverData("curiosity"),
          fetchRoverData("opportunity"),
          fetchRoverData("spirit")
        ]);
        setRovers(allRoverData.filter(Boolean)); 
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
