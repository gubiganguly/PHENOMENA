/* eslint-disable react/no-unknown-property */
import React, { forwardRef, useMemo, useRef, useLayoutEffect, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";
import { IUniform } from "three";

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

// Mobile detection
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// WebGL support detection
const hasWebGLSupport = () => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    ));
  } catch (e) {
    return false;
  }
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.1 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.3 +
                  0.7 * sin(3.0 * (tex.x + tex.y +
                                   cos(2.0 * tex.x + 3.0 * tex.y) +
                                   0.05 * tOffset) +
                           sin(15.0 * (tex.x + tex.y - 0.2 * tOffset)));

  // Add more contrast and variation
  pattern = pow(pattern, 0.8);
  
  vec4 col = vec4(uColor, 1.0) * vec4(pattern) + rnd / 8.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
  { uniforms },
  ref
) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
  children?: React.ReactNode;
}

const Silk: React.FC<SilkProps> = ({
  speed = 5,
  scale = 1,
  color = "#000000",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
  children,
}) => {
  const meshRef = useRef<Mesh>(null);
  const [webglFailed, setWebglFailed] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  // CSS fallback background for when WebGL actually fails
  const fallbackStyle = {
    background: `
      radial-gradient(ellipse at 20% 50%, ${color}44 0%, ${color} 40%),
      radial-gradient(ellipse at 80% 50%, ${color}33 0%, ${color} 40%),
      linear-gradient(135deg, ${color}22 0%, ${color} 100%)
    `,
    backgroundSize: '400% 400%, 300% 300%, 100% 100%',
    backgroundPosition: '0% 50%, 100% 50%, 0% 0%',
    animation: `silkMobile 12s ease-in-out infinite`,
  };

  // Only use fallback if WebGL actually failed, not just because it's mobile
  if (webglFailed) {
    return (
      <>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes silkMobile {
              0%, 100% { 
                background-position: 0% 50%, 100% 50%, 0% 0%; 
              }
              33% { 
                background-position: 50% 0%, 50% 100%, 10% 10%; 
              }
              66% { 
                background-position: 100% 50%, 0% 50%, 20% 0%; 
              }
            }
          `
        }} />
        <div 
          className={`relative ${className}`}
          style={{ 
            width: '100%', 
            height: '100%',
            minHeight: 'inherit',
            backgroundColor: color,
            ...fallbackStyle
          }}
        >
          {children && (
            <div className="relative z-10">
              {children}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: 'inherit'
      }}
    >
      <Canvas 
        dpr={isMobileDevice ? [1, 1.5] : [1, 2]} 
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%',
          zIndex: 0
        }}
        onError={() => setWebglFailed(true)}
        onCreated={() => console.log('Silk Canvas created successfully on mobile!')}
      >
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
      {children && (
        <div 
          className="relative" 
          style={{ zIndex: 10 }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Silk;
export { Silk }; 