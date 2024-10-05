import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = ({ targetPosition }: { targetPosition: [number, number, number] }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...targetPosition);
    camera.lookAt(0, 0, 0); 
  }, [camera, targetPosition]);

  return null;
};

export default CameraController;
