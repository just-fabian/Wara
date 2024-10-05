import React, { useEffect, useState } from "react";
import { Astro } from "../utils/interfaces";
import { getAllPlanetsInfo, getAstroInfo } from "../services/stellariumService";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Color, MathUtils, TextureLoader, Vector3 } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import PlanetMesh from "../components/PlanetMesh";


const Maps: React.FC = () => {
  const [planets, setPlanets] = useState<Astro[]>([]);
  const [sun, setSun] = useState<Astro>({} as Astro);
  const [loading, setLoading] = useState<boolean>(true);
  const [userPosition, setUserPosition] = useState<{
    lat: number;
    lon: number;
  }>({ lat: 0, lon: 0 });

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      const planetsResponse = await getAllPlanetsInfo();
      const sunResponse = await getAstroInfo("Sun", "src/assets/astros/sun.jpg");
      setSun(sunResponse);
      console.log(planetsResponse);
      setPlanets(planetsResponse);
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Canvas style={{ height: "100vh", backgroundColor: "#000" }}>
      <OrbitControls enableZoom={true} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
      <ambientLight intensity={1.0} /> {/* Aumentar la intensidad de la luz ambiental */}
      <pointLight position={[10, 10, 10]} intensity={2} /> {/* Aumentar la intensidad de la luz puntual */}
      <directionalLight position={[0, 0, 5]} intensity={2} /> {/* Aumentar la intensidad de la luz direccional */}
      <pointLight position={[0, 0, 0]} intensity={3} /> {/* Añadir una luz puntual en el centro para simular el sol */}
      {planets.map((planet) => {
        return <PlanetMesh key={planet.name} planet={planet} />;
      })}
      <PlanetMesh key="Sun" planet={sun} size={1}/>
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default Maps;