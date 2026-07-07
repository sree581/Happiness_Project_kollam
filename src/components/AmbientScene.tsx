import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshReflectorMaterial, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';

function FloatingShape({ position, scale, color, speed, distort }: { position: [number, number, number]; scale: number; color: string; speed: number; distort: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.35} floatIntensity={1.15}>
      <Sphere args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial color={color} distort={distort} speed={1.5} roughness={0.45} metalness={0.35} />
      </Sphere>
    </Float>
  );
}

function FloatingRing({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.8}>
      <Torus args={[1.5, 0.18, 32, 64]} position={position} rotation={[Math.PI / 2, 0, 0]} scale={scale}>
        <meshStandardMaterial color="#c3c3c3" roughness={0.25} metalness={0.8} />
      </Torus>
    </Float>
  );
}

export default function AmbientScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 1.8, 9], fov: 35 }}>
        <color attach="background" args={['#f8fafc']} />
        <fog attach="fog" args={['#f8fafc', 8, 22]} />
        <ambientLight intensity={0.75} />
        <directionalLight castShadow position={[4, 8, 6]} intensity={1.2} />
        <pointLight position={[-6, 2, 2]} intensity={0.8} color="#8fb4ff" />
        <Environment preset="sunset" />

        <FloatingShape position={[-2.2, 0.8, -0.4]} scale={1.5} color="#0f172a" speed={1.2} distort={0.35} />
        <FloatingShape position={[1.6, 1.2, -1.8]} scale={1.1} color="#475569" speed={1.05} distort={0.45} />
        <FloatingShape position={[0.8, -0.2, -0.8]} scale={1.8} color="#94a3b8" speed={0.9} distort={0.28} />
        <FloatingRing position={[0, 2.6, -1.2]} scale={0.9} speed={0.6} />
        <FloatingRing position={[-1.4, -0.3, -0.4]} scale={0.7} speed={0.95} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.08, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[600, 60]}
            resolution={1024}
            mixBlur={1.3}
            mixStrength={1.5}
            roughness={0.9}
            depthScale={1.2}
            minDepthThreshold={0.8}
            maxDepthThreshold={2.4}
            color="#f8fafc"
            metalness={0.15}
          />
        </mesh>

        <group position={[-2.2, 2.7, -3.4]}>
          <mesh>
            <sphereGeometry args={[0.45, 32, 32]} />
            <meshStandardMaterial color="#e2e8f0" opacity={0.18} transparent />
          </mesh>
        </group>
        <group position={[1.8, 2.2, -2.8]}>
          <mesh>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#f1f5f9" opacity={0.16} transparent />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
}
