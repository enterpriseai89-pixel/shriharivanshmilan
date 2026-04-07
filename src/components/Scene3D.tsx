import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const FloatingLotus = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing lotus-like sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={2}>
        <Sphere args={[0.8, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#4a90d9"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Peacock feather colored rings */}
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <Torus
            args={[1.5 + i * 0.4, 0.015, 16, 100]}
            rotation={[Math.PI / (3 + i), i * 0.6, 0]}
          >
            <meshStandardMaterial
              color={["#f59e0b", "#22c55e", "#4a90d9"][i]}
              emissive={["#f59e0b", "#22c55e", "#4a90d9"][i]}
              emissiveIntensity={0.6}
              transparent
              opacity={0.5}
            />
          </Torus>
        </Float>
      ))}

      {/* Floating divine particles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.2;
        return (
          <Float key={`orb-${i}`} speed={1.8 + i * 0.15} floatIntensity={1.2}>
            <Sphere
              args={[0.05, 16, 16]}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 2) * 0.8,
                Math.sin(angle) * radius,
              ]}
            >
              <meshStandardMaterial
                color={i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#4a90d9" : "#22c55e"}
                emissive={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#3b82f6" : "#16a34a"}
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
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#f59e0b" />
          <pointLight position={[-10, -5, 5]} intensity={0.4} color="#4a90d9" />
          <pointLight position={[0, 10, -5]} intensity={0.3} color="#22c55e" />
          <Stars radius={50} depth={50} count={800} factor={2.5} saturation={0.3} fade speed={0.8} />
          <FloatingLotus />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
