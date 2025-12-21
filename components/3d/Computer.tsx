"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    retro_computer_setup_retro_computer_setup_Mat_0: THREE.Mesh;
  };
  materials: {
    retro_computer_setup_Mat: THREE.MeshStandardMaterial;
  };
};

type ComputerProps = React.JSX.IntrinsicElements["group"] & {
  isMobile: boolean;
};

export function Computer({ isMobile, ...props }: ComputerProps) {
  const { nodes, materials } = useGLTF("/computer-transformed.glb") as unknown as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  const responsiveScale = isMobile ? 0.12 : 0.15;
  const responsivePosition: [number, number, number] = [0, isMobile ? -1 : -3, 0];

  useFrame((state) => {
    if (!groupRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    groupRef.current.rotation.y = mouseX * 0.10;
    groupRef.current.rotation.x = -mouseY * 0.10;
    groupRef.current.position.y = responsivePosition[1] + Math.sin(state.clock.elapsedTime) * 0.05;
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      scale={responsiveScale}
      position={responsivePosition}
    >
      <mesh
        geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");