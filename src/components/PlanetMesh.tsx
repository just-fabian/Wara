import React, { useEffect, useState } from "react";
import { Astro } from "../utils/interfaces";
import { getAllPlanetsInfo, getAstroInfo } from "../services/stellariumService";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Color, MathUtils, TextureLoader, Vector3 } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface PlanetMeshProps {
    planet: Astro;
    size? : number;
  }
  
  const PlanetMesh = (
    { planet, size } : PlanetMeshProps
  ) => {
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
  
    useEffect(() => {
      console.log("Planet name: ", planet.name);
      console.log("Planet Size : ", planet.size);
    }, []);
  
    return (
      <mesh position={[x, y, z]}>
        {/* Use the planet's texture */}
        <sphereGeometry args={[size?? planet.size, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          emissive={new Color(0x444444)}
          emissiveIntensity={1.0} // Aumentar la intensidad emisiva
        />
      </mesh>
    );
  };

export default PlanetMesh;