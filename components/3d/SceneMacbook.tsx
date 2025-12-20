"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import { Macbook } from "./Macbook";
import BootLoader from "./BootLoader";

export default function SceneMacbook() {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ powerPreference: "high-performance", antialias: false }}
        camera={{ position: [0, 5, 10], fov: 35 }}
        className="w-full h-full"
      >
        <BootLoader onReady={() => setTimeout(() => setShowModel(true), 500)} />

        <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[-5, 5, 5]} intensity={2} color="#4f46e5" />
            <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

            <group visible={showModel}>
                <Macbook showScreen={showModel}/>
            </group>

            <Preload all />
        </Suspense>

        <Suspense fallback={null}>
             <Environment preset="city" />
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