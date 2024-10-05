import React, { useEffect, useState } from "react";
import { Astro, astroImgs, Astros } from "../utils/interfaces";
import { getAllPlanetsInfo, getAstroInfo } from "../services/stellariumService";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import PlanetMesh from "../components/PlanetMesh";

const CameraController: React.FC<{ position: [number, number, number], setCameraPosition: React.Dispatch<React.SetStateAction<[number, number, number]>> }> = ({ position, setCameraPosition }) => {
  useFrame(({ camera }) => {
    camera.position.set(position[0], position[1], position[2]);
    setCameraPosition([camera.position.x, camera.position.y, camera.position.z]);
  });
  return null;
};

const Maps: React.FC = () => {
  const [planets, setPlanets] = useState<Astro[]>([]);
  const [sun, setSun] = useState<Astro>({} as Astro);
  const [loading, setLoading] = useState<boolean>(true);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 10]);
  const [targetPosition, setTargetPosition] = useState<[number, number, number] | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      const planetsResponse = await getAllPlanetsInfo();
      const sunResponse = await getAstroInfo(Astros.Sun, astroImgs[Astros.Sun]);
      setSun(sunResponse);
      setPlanets(planetsResponse);
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  const changeCameraPositionToAstro = (astro: Astro) => {
    console.log("astro : ", astro.position);
    let zoomOutFactor = 1.3;
    if (astro.name === Astros.Sun) {
      zoomOutFactor = 2;
    } 
    setTargetPosition([
      astro.position.x * zoomOutFactor,
      astro.position.y * zoomOutFactor,
      astro.position.z * zoomOutFactor
    ]);
  };

  useEffect(() => {
    if (targetPosition) {
      setCameraPosition(targetPosition);
      setTargetPosition(null);
    }
  }, [targetPosition]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Canvas
      style={{ height: "100vh", backgroundColor: "#000" }}
      camera={{ position: [0, 0, 10], fov: 70 }}
      onClick={() => console.log("click on canvas")}
    >
      {targetPosition && <CameraController position={targetPosition} setCameraPosition={setCameraPosition} />}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <ambientLight intensity={1.0} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <directionalLight position={[0, 0, 5]} intensity={2} />
      <pointLight position={[0, 0, 0]} intensity={3} />
      {planets.map((planet) => {
        return (
          <PlanetMesh
            key={planet.name}
            planet={planet}
            onClick={() => changeCameraPositionToAstro(planet)}
          />
        );
      })}
      <PlanetMesh key={Astros.Sun} planet={sun} size={0.2} onClick={() => changeCameraPositionToAstro(sun)} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>

    </Canvas>

    <div>
      <h1 style={{ color: "#fff", position: "absolute", bottom: 10, left: 10 }}>Solar System</h1>
    </div>
    </>

  );
};

export default Maps;