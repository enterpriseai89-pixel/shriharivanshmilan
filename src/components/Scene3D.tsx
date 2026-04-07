import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const FloatingLotus = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#f59e0b"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting rings */}
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={0.3} floatIntensity={0.5}>
          <Torus
            args={[1.8 + i * 0.5, 0.02, 16, 100]}
            rotation={[Math.PI / (3 + i), i * 0.5, 0]}
          >
            <meshStandardMaterial
              color={["#f59e0b", "#ec4899", "#8b5cf6"][i]}
              emissive={["#f59e0b", "#ec4899", "#8b5cf6"][i]}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </Torus>
        </Float>
      ))}

      {/* Small floating orbs */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.5;
        return (
          <Float key={`orb-${i}`} speed={2 + i * 0.2} floatIntensity={1}>
            <Sphere
              args={[0.08, 16, 16]}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * 0.5,
                Math.sin(angle) * radius,
              ]}
            >
              <meshStandardMaterial
                color="#fbbf24"
                emissive="#f59e0b"
                emissiveIntensity={2}
              />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
};

const Scene3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#f59e0b" />
          <pointLight position={[-10, -5, 5]} intensity={0.5} color="#ec4899" />
          <Stars radius={50} depth={50} count={1000} factor={3} saturation={0.5} fade speed={1} />
          <FloatingLotus />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
