import React from "react";
import { useGLTF } from "@react-three/drei"
import { Float } from "@react-three/drei";
import { useTransform } from "motion/react";
import { motion } from "framer-motion-3d";

export interface IModelProps {
}

export default function Model ({ mouse } : IModelProps) {

    const { nodes } = useGLTF("/medias/floating_shapes6.glb");
  return (
    <Float>
    <group>
      <Mesh node={nodes.CylinderBase} mouse={mouse}/>
      <Mesh node={nodes.EyeLeft} mouse={mouse}/>
      <Mesh node={nodes.EyeRight} mouse={mouse}/>
      <ShapeMesh node={nodes.PupilLeft} mouse={mouse} multiplier={4}/>
      <ShapeMesh node={nodes.PupilRight} mouse={mouse} multiplier={4}/>
      <Mesh node={nodes.Moustache} mouse={mouse}/>
      <Mesh node={nodes.Monocle} mouse={mouse}/>
      <Mesh node={nodes.EyebrowLeft} mouse={mouse}/>
      <Mesh node={nodes.EyebrowRight} mouse={mouse}/>
      {/* <ShapeMesh node={nodes.Shape001} mouse={mouse} multiplier={-0.6}/>
      <ShapeMesh node={nodes.Hedra001} mouse={mouse} multiplier={2.4}/>
      <ShapeMesh node={nodes.ChamferCyl001} mouse={mouse} multiplier={1.4}/> */}
      <Mesh node={nodes.CoatHanger} mouse={mouse}/>
    </group>
    </Float>
  );
}

useGLTF.preload("/medias/floating_shapes6.glb");

function ShapeMesh({ node, mouse, multiplier }) {
    const { castShadow, receiveShadow, geometry, material, position, rotation, scale } = node;
    const divMultiplier = multiplier / 2
    const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - divMultiplier, rotation.x + divMultiplier ])
    const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - divMultiplier, rotation.y + divMultiplier ])
    const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier, position.x + multiplier ])
    const positionY = useTransform(mouse.y, [0, 1], [position.y + multiplier, position.y - multiplier ])
    return (
        <motion.mesh
        castShadow={castShadow}
        receiveShadow={receiveShadow}
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
        rotation-x={rotationY}
        rotation-y={rotationX}
        position-x={positionX}
        position-y={positionY}
        />
    )
}
function Mesh({ node, mouse }) {
  const { castShadow, receiveShadow, geometry, material, position, rotation, scale } = node;
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - 1, rotation.x + 1 ])
  return (
      <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      />
  )
}