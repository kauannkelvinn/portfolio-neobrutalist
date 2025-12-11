"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Computer } from "@/components/3d/Computer";

export default function Scene() {
    return (
        <div className="w-full h-full absolute inset-0 z-10 pointer-events-auto">
            <Canvas
                camera={{ position: [0, 2, 35], fov: 45 }}
                className="w-full h-full"
            >
                <ambientLight intensity={1} />
                <directionalLight position={[5, 10, 5]} intensity={2} />
                <pointLight position={[-2, -2, -2]} intensity={5} color="#ef4444" />
                <Computer />
                <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 2.5} 
                    maxPolarAngle={Math.PI / 2}
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
};
