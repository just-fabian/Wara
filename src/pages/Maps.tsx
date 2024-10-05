import React, { useEffect, useState } from "react";
import { Planet } from "../utils/interfaces";
import { getAllPlanetsInfo } from "../services/stellariumService";



const Maps: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanets = async () => {
        console.log("fetching planets");
        setLoading(true);
        const planetsResponse = await getAllPlanetsInfo();
        setPlanets(planetsResponse);
        setLoading(false);
    }
    fetchPlanets();
  }
    , []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Planets Information</h1>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <h2>{planet.name}</h2>
            <p><strong>Phase:</strong> {planet.phase}</p>
            <p><strong>Distance from Earth:</strong> {planet.distanceKm.toFixed(2)} km</p>
            <p><strong>Apparent Size:</strong> {planet.sizeDeg}</p>
            <p><strong>Visual Magnitude:</strong> {planet.magnitude}</p>
            <p><strong>Phase Angle:</strong> {planet.phaseAngle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Maps;
