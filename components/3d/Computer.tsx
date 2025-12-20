"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    retro_computer_setup_retro_computer_setup_Mat_0: THREE.Mesh;
  };
  materials: {
    retro_computer_setup_Mat: THREE.MeshStandardMaterial;
  };
};

export function Computer(props: React.JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/computer-transformed.glb") as unknown as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 50;
  const responsiveScale = isMobile ? 0.12 : 0.15;
  const responsivePosition: [number, number, number] = [0, isMobile ? -1 : -3, 0];

  useFrame((state) => {
    if (!groupRef.current) return;
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    groupRef.current.rotation.y = mouseX * 0.10;
    groupRef.current.rotation.x = -mouseY * 0.10;
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

      <mesh
        geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");