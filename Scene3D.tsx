import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Stars, Sparkles, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function HotelStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.002;
      
      // Parallax effect based on mouse
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.15, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouse.x * 0.15, 0.05);
      
      // Floating effect
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, Math.sin(state.clock.elapsedTime) * 0.2 - 1, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Main Tower Core */}
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[1.5, 9, 1.5]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.05}
            anisotropy={0.2}
            distortion={0.2}
            distortionScale={0.2}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={1}
            attenuationColor="#D4AF37"
            color="#ffffff"
          />
        </mesh>

        {/* Outer Glass Shell */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[1.8, 1.8, 8.5, 8]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.1}
            anisotropy={0.1}
            clearcoat={1}
            color="#ffffff"
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Golden Rings / Floors */}
        {[-2, 0, 2, 4, 6].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <torusGeometry args={[2, 0.05, 16, 32]} />
            <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} emissive="#D4AF37" emissiveIntensity={0.2} />
          </mesh>
        ))}

        {/* Base Platform */}
        <mesh position={[0, -2.5, 0]}>
          <cylinderGeometry args={[3, 4, 0.5, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Glowing Core */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 8, 16]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  return (
    <>
      <Sparkles 
        count={300} 
        scale={15} 
        size={3} 
        speed={0.2} 
        opacity={0.6} 
        color="#D4AF37" 
      />
      <Sparkles 
        count={100} 
        scale={10} 
        size={5} 
        speed={0.5} 
        opacity={0.3} 
        color="#ffffff" 
      />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 8, 25]} />
        
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#D4AF37" />
        <directionalLight position={[-10, 10, -5]} intensity={1} color="#ffffff" />
        <pointLight position={[0, -5, 0]} intensity={1} color="#D4AF37" />
        
        <HotelStructure />
        <Particles />
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        
        <ContactShadows position={[0, -4, 0]} opacity={0.5} scale={20} blur={2} far={10} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
