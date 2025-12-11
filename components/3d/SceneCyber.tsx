"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Cyberlaptop } from "./Cyberlaptop";

export default function SceneCyber() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 40 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.2} />
        
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ff0000" />
        
        <pointLight position={[-5, 2, -5]} intensity={2} color="#00ffff" />

        <Cyberlaptop />

        <Environment preset="night" />
        
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