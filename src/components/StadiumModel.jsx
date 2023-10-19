import React, { Suspense } from "react";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
function Model() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh", background: "#009052" }}>
      <ambientLight intensity={1} /> {/* Окружающее освещение */}
      <directionalLight position={[0, 15, 10]} intensity={7} />
      <Suspense fallback={null}>
        <ModelContent />
      </Suspense>
      {/* <ModelRotationControl/> */}
    </Canvas>
  );
}

function ModelContent() {
  const gltf = useLoader(GLTFLoader, "/untitled.glb");
  const { camera } = useThree();

  const screenWidth = window.innerWidth;

  //   gltf.scene.scale.set(0.07, 0.07, 0.07);
  //   gltf.scene.position.set(9, -5, 0);
  gltf.scene.rotation.y = -1.57;

  if (screenWidth > 920) gltf.scene.scale.set(0.07, 0.07, 0.07);
  if (screenWidth < 920) gltf.scene.scale.set(0.05, 0.05, 0.05);
  if (screenWidth < 720) gltf.scene.scale.set(0.04, 0.04, 0.04);
  if (screenWidth < 460) gltf.scene.scale.set(0.023, 0.023, 0.023);

  // Позиция сцены
  if (screenWidth > 920) gltf.scene.position.set(9, -5, 0);
  if (screenWidth < 920) gltf.scene.position.set(6.9, -5, 0);
  if (screenWidth < 720) gltf.scene.position.set(6.4, -5, 0);
  if (screenWidth < 460) gltf.scene.position.set(3.4, -3, 0);

  useFrame(() => {
    camera.position.set(0, 7, 10);
    camera.lookAt(0, 0, 0);
  });

  return <primitive object={gltf.scene} />;
}

export default Model;
