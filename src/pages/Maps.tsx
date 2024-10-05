import React, { useEffect, useState } from "react";
import { Planet } from "../utils/interfaces";
import { getAllPlanetsInfo } from "../services/stellariumService";
import { Canvas, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { MathUtils, TextureLoader, Vector3 } from "three";

const PlanetMesh = ({ planet }: { planet: Planet }) => {
  const texture = useLoader(TextureLoader, planet.texture);

  const calculatePosition = () => {
    const { azimuth, altitude, distance } = planet;

    // Convert azimuth and altitude to radians
    const azimuthRad = MathUtils.degToRad(azimuth);
    const altitudeRad = MathUtils.degToRad(altitude);

    // Convert spherical coordinates (distance, azimuth, altitude) to 3D cartesian coordinates (x, y, z)
    const x = distance * Math.cos(altitudeRad) * Math.sin(azimuthRad);
    const y = distance * Math.sin(altitudeRad);
    const z = distance * Math.cos(altitudeRad) * Math.cos(azimuthRad);

    return [x, y, z];
  };

  const [x, y, z] = calculatePosition();

  return (
    <mesh position={[x, y, z]}>
      {/* Use the planet's texture */}
      <sphereGeometry args={[planet.size, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
const Maps: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
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
    <Canvas style={{ height: "100vh", background: "#000" }}>
      {/* Enable orbit controls for 360-degree rotation */}
      <OrbitControls enableZoom={true} />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {planets.map((planet) => {
        return <PlanetMesh planet={planet} />;
      })}
    </Canvas>
  );
};

export default Maps;
