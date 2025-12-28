"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, PerformanceMonitor } from "@react-three/drei";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { Cyberlaptop } from "./Cyberlaptop";
import BootLoader from "./BootLoader";
import Effects from "./Effects";
import Image from "next/image";

export default function SceneCyber() {
  const isMobile = useIsMobile();
  const [showModel, setShowModel] = useState(false);  
  const [crashed, setCrashed] = useState(false);

  if (crashed) {
    return (
      <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-[85%] h-[85%] md:w-[60%] md:h-[60%] flex items-center justify-center">
            <Image 
                src="/models/preview-cyber5.png"
                alt="Cyber Setup Preview" 
                fill 
                className="object-contain"
                priority
            />
        </div>

        <div className="absolute bottom-6 right-6 text-[10px] font-mono text-red-200/50 bg-red-900/20 px-2 py-1 rounded backdrop-blur-sm border border-red-500/10">
            [ LOW POWER MODE ]
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ powerPreference: "high-performance", antialias: false }}
        camera={{ position: [0, 2, 8], fov: 40 }}
        className="w-full h-full"
      >
        <PerformanceMonitor 
            onFallback={() => setCrashed(true)} 
            flipflops={3}
            onDecline={() => {
                if (isMobile) setCrashed(true);
            }}
        />

        <BootLoader onReady={() => setTimeout(() => setShowModel(true), 500)} />

        {!isMobile && <Effects />}

        <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#ff0000" />
            <pointLight position={[-5, 2, -5]} intensity={2} color="#00ffff" />

            <group visible={showModel}>
               <Cyberlaptop showScreen={showModel} isMobile={isMobile}/>
            </group>

            <Preload all />
        </Suspense>

        <Suspense fallback={null}>
            <Environment preset="night" />
        </Suspense>
        
        {!isMobile && (
            <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 2}
            />
        )}
      </Canvas>
    </div>
  );
};