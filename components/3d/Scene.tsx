"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Environment, OrbitControls, Preload, PerformanceMonitor } from "@react-three/drei";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { Computer } from "@/components/3d/Computer";
import BootLoader from "./BootLoader";
import Effects from "./Effects";
import Image from "next/image";

export default function Scene() {
    const isMobile = useIsMobile();
    const [showModel, setShowModel] = useState(false);
    const [crashed, setCrashed] = useState(false);

    if (crashed) {
        return (
            <div className="w-full h-full absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <div className="relative w-[85%] h-[85%] md:w-[70%] md:h-[70%] flex items-center justify-center">
                    <Image
                        src="/models/preview-hero2.png"
                        alt="3D Preview"
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
        <div className={`w-full h-full absolute inset-0 z-10 ${isMobile ? 'pointer-events-none' : 'pointer-events-auto'}`}>
            <Canvas
                dpr={[1, 1.5]}
                gl={{ powerPreference: "high-performance", antialias: false }}
                camera={{ position: [0, 2, 35], fov: 45 }}
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
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 10, 5]} intensity={2} />
                    <pointLight position={[-2, -2, -2]} intensity={5} color="#ef4444" />

                    <group visible={showModel}>
                        <Computer isMobile={isMobile} />
                    </group>

                    <Preload all />
                </Suspense>

                <Suspense fallback={null}>
                    <Environment preset="city" />
                </Suspense>

                {!isMobile && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2}
                    />
                )}
            </Canvas>
        </div>
    )
};