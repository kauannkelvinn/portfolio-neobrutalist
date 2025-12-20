"use client";

import { Suspense, useState } from "react"; // <--- Importe useState
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import { Cyberlaptop } from "./Cyberlaptop";
import BootLoader from "./BootLoader";

export default function SceneCyber() {
  // Estado de visibilidade
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ powerPreference: "high-performance", antialias: false }}
        camera={{ position: [0, 2, 8], fov: 40 }}
        className="w-full h-full"
      >
        <BootLoader onReady={() => setTimeout(() => setShowModel(true), 500)} />

        <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#ff0000" />
            <pointLight position={[-5, 2, -5]} intensity={2} color="#00ffff" />

            <group visible={showModel}>
               <Cyberlaptop showScreen={showModel}/>
            </group>

            <Preload all />
        </Suspense>

        <Suspense fallback={null}>
            <Environment preset="night" />
        </Suspense>
        
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