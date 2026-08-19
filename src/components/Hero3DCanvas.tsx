import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x2a164d, 2.5);
    scene.add(ambientLight);

    const mainPointLight = new THREE.PointLight(0xa855f7, 8, 50);
    mainPointLight.position.set(5, 5, 8);
    scene.add(mainPointLight);

    const bluePointLight = new THREE.PointLight(0x6366f1, 5, 40);
    bluePointLight.position.set(-6, -4, 6);
    scene.add(bluePointLight);

    const rimLight = new THREE.DirectionalLight(0xd8b4fe, 2);
    rimLight.position.set(0, 8, -5);
    scene.add(rimLight);

    // 1. Primary 3D Glossy Purple Sphere (matching reference image)
    const sphereGeometry = new THREE.SphereGeometry(1.6, 64, 64);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9333ea,
      emissive: 0x3b0764,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transmission: 0.1,
    });
    const mainSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    mainSphere.position.set(4.5, 1.2, 2);
    scene.add(mainSphere);

    // 2. Secondary Floating Soft Violet Orb
    const orbGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x581c87,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.2,
    });
    const smallOrb = new THREE.Mesh(orbGeometry, orbMaterial);
    smallOrb.position.set(-5, -2, 1);
    scene.add(smallOrb);

    // 3. Floating 3D Geometric AI Neural Core (Wireframe Icosahedron)
    const icoGeometry = new THREE.IcosahedronGeometry(2.4, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    icoMesh.position.set(5.5, -3, -1);
    scene.add(icoMesh);

    // Inner glowing core of icosahedron
    const innerCoreGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xe9d5ff,
      transparent: true,
      opacity: 0.5,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    icoMesh.add(innerCore);

    // 4. Interactive 3D Particle Constellation / Dust
    const particleCount = 250;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      scales[i] = Math.random() * 2 + 0.5;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Create circular particle texture programmatically
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(192, 132, 252, 0.8)');
      gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Mouse Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // 3D camera subtle sway
      camera.position.x = currentMouseX * 1.5;
      camera.position.y = -currentMouseY * 1.5;
      camera.lookAt(0, 0, 0);

      // Main Purple Sphere floating bob + rotation
      mainSphere.position.y = 1.2 + Math.sin(elapsedTime * 1.2) * 0.4;
      mainSphere.position.x = 4.5 + Math.cos(elapsedTime * 0.8) * 0.3 + currentMouseX * 0.6;
      mainSphere.rotation.y += 0.008;
      mainSphere.rotation.x += 0.004;

      // Small Orb floating
      smallOrb.position.y = -2 + Math.cos(elapsedTime * 1.5) * 0.3;
      smallOrb.position.x = -5 + Math.sin(elapsedTime * 1.1) * 0.4 - currentMouseX * 0.4;

      // Icosahedron rotation & floating
      icoMesh.rotation.x = elapsedTime * 0.25;
      icoMesh.rotation.y = elapsedTime * 0.35;
      icoMesh.position.y = -3 + Math.sin(elapsedTime * 0.9) * 0.35;

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.03 + currentMouseX * 0.1;
      particles.rotation.x = elapsedTime * 0.015 - currentMouseY * 0.1;

      // Dynamic light tracking
      mainPointLight.position.x = 5 + currentMouseX * 3;
      mainPointLight.position.y = 5 - currentMouseY * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      // Dispose resources
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
