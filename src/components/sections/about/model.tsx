import React from 'react';
import { useGLTF, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useTransform, MotionValue } from 'framer-motion';
import { BufferGeometry, Material, Mesh as ThreeMesh, Object3D } from 'three';

export interface IModelProps {
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
}

interface GLTFResult {
  nodes: {
    [key: string]: Object3D;
  };
}

function isMesh(object: Object3D): object is ThreeMesh<BufferGeometry, Material | Material[]> {
  return (object as ThreeMesh).isMesh === true;
}

export default function Model({ mouse }: IModelProps) {
  const { nodes } = useGLTF('/medias/floating_shapes6.glb') as unknown as GLTFResult;

  return (
    <Float>
      <group>
        {isMesh(nodes.CylinderBase) && <Mesh node={nodes.CylinderBase} mouse={mouse} />}
        {isMesh(nodes.EyeLeft) && <Mesh node={nodes.EyeLeft} mouse={mouse} />}
        {isMesh(nodes.EyeRight) && <Mesh node={nodes.EyeRight} mouse={mouse} />}
        {isMesh(nodes.PupilLeft) && <ShapeMesh node={nodes.PupilLeft} mouse={mouse} multiplier={4} />}
        {isMesh(nodes.PupilRight) && <ShapeMesh node={nodes.PupilRight} mouse={mouse} multiplier={4} />}
        {isMesh(nodes.Moustache) && <Mesh node={nodes.Moustache} mouse={mouse} />}
        {isMesh(nodes.Monocle) && <Mesh node={nodes.Monocle} mouse={mouse} />}
        {isMesh(nodes.EyebrowLeft) && <Mesh node={nodes.EyebrowLeft} mouse={mouse} />}
        {isMesh(nodes.EyebrowRight) && <Mesh node={nodes.EyebrowRight} mouse={mouse} />}
      </group>
    </Float>
  );
}

interface ShapeMeshProps {
  node: ThreeMesh<BufferGeometry, Material | Material[]>;
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
  multiplier: number;
}

function ShapeMesh({ node, mouse, multiplier }: ShapeMeshProps) {
  const { castShadow, receiveShadow, geometry, material, position, rotation, scale } = node;
  const divMultiplier = multiplier / 2;
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - divMultiplier, rotation.x + divMultiplier]);
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - divMultiplier, rotation.y + divMultiplier]);

  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position.toArray()}
      rotation={rotation.toArray()}
      scale={scale.toArray()}
      rotation-x={rotationY}
      rotation-y={rotationX}
    />
  );
}

interface MeshProps {
  node: ThreeMesh<BufferGeometry, Material | Material[]>;
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
}

function Mesh({ node }: MeshProps) {
  const { castShadow, receiveShadow, geometry, material, position, rotation, scale } = node;

  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position.toArray()}
      rotation={rotation.toArray()}
      scale={scale.toArray()}
    />
  );
}
