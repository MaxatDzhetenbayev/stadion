import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Loader, OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          background: "#009052",
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 15, 10]} intensity={7} />
        <OrbitControls enableDamping />
        <Suspense fallback={null}>
          <ModelContent />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

function ModelContent() {
  const gltf = useGLTF("untitled.glb");

  const { camera } = useThree();

  const screenWidth = window.innerWidth;

  gltf.scene.rotation.y = -1.57;

  if (screenWidth > 920) gltf.scene.scale.set(0.07, 0.07, 0.07);
  if (screenWidth < 920) gltf.scene.scale.set(0.05, 0.05, 0.05);
  if (screenWidth < 720) gltf.scene.scale.set(0.04, 0.04, 0.04);
  if (screenWidth < 460) gltf.scene.scale.set(0.023, 0.023, 0.023);

  if (screenWidth > 920) gltf.scene.position.set(9, -5, 0);
  if (screenWidth < 920) gltf.scene.position.set(6.9, -5, 0);
  if (screenWidth < 720) gltf.scene.position.set(6.4, -5, 0);
  if (screenWidth < 460) gltf.scene.position.set(3.4, -3, 0);

  camera.position.set(0, 7, 10);

  return <primitive object={gltf.scene} />;
}

export default Model;
