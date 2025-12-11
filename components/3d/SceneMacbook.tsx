"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Macbook } from "./Macbook";

export default function SceneMacbook() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 5, 10], fov: 35 }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={2} color="#4f46e5" />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

        <Macbook />

        <Environment preset="city" />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}