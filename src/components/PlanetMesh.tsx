import { useEffect, useState } from "react";
import { Astro } from "../utils/interfaces";
import { useLoader } from "@react-three/fiber";
import { Color, MathUtils, TextureLoader } from "three";

interface PlanetMeshProps {
  planet: Astro;
  size?: number;
  onClick?: () => void;
}

const PlanetMesh = ({ planet, size, onClick }: PlanetMeshProps) => {
  const texture = useLoader(TextureLoader, planet.texture);

  const calculatePosition = () => {
    const { azimuth, altitude, distance } = planet;
    const azimuthRad = MathUtils.degToRad(azimuth);
    const altitudeRad = MathUtils.degToRad(altitude);
    const x = distance * Math.cos(altitudeRad) * Math.sin(azimuthRad);
    const y = 0;
    const z = distance * Math.cos(altitudeRad) * Math.cos(azimuthRad);
    planet.position = { x, y, z };

    return [x, y, z];
  };

  const [x, y, z] = calculatePosition();


  return (
    <mesh position={[x, y, z]} onClick={onClick}>
      <sphereGeometry args={[size ?? planet.size, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissive={new Color(0x444444)}
        emissiveIntensity={1.0} 
      />
    </mesh>
  );
};

export default PlanetMesh;
