import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Global3DBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0x3b1c6e, 2);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4, 60);
    purpleLight.position.set(10, 10, 10);
    scene.add(purpleLight);

    const violetLight = new THREE.PointLight(0x6366f1, 3, 50);
    violetLight.position.set(-10, -10, 8);
    scene.add(violetLight);

    // 1. Floating Interactive 3D Ambient Dust Particles (Global across all sections)
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xc084fc); // Purple
    const color2 = new THREE.Color(0x818cf8); // Indigo
    const color3 = new THREE.Color(0xe9d5ff); // Light violet

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle sprite texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(192, 132, 252, 0.8)');
      gradient.addColorStop(0.7, 'rgba(147, 51, 234, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Slow Orbiting 3D Nodes (AI Neural Visual Elements)
    const nodeGeometry = new THREE.IcosahedronGeometry(1.2, 0);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    const nodes: THREE.Mesh[] = [];
    const nodeConfigs = [
      { x: -14, y: 12, z: -5, speed: 0.005 },
      { x: 16, y: 4, z: -8, speed: 0.007 },
      { x: -12, y: -18, z: -6, speed: 0.004 },
      { x: 15, y: -25, z: -4, speed: 0.006 },
    ];

    nodeConfigs.forEach((cfg) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(cfg.x, cfg.y, cfg.z);
      scene.add(node);
      nodes.push(node);
    });

    // Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollYOffset = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollYOffset = (window.scrollY / (document.body.scrollHeight || 1)) * 30;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      // Camera responds to scroll and mouse parallax
      camera.position.x = currentMouseX * 2;
      camera.position.y = -currentMouseY * 2 - (scrollYOffset * 0.2);
      camera.lookAt(0, -scrollYOffset * 0.2, 0);

      // Rotate particle network
      particles.rotation.y = elapsedTime * 0.02 + currentMouseX * 0.1;
      particles.rotation.x = elapsedTime * 0.01;

      // Animate floating nodes
      nodes.forEach((node, idx) => {
        node.rotation.x += 0.005 * (idx + 1);
        node.rotation.y += 0.008 * (idx + 1);
        node.position.y += Math.sin(elapsedTime + idx) * 0.005;
      });

      // Lights move with mouse
      purpleLight.position.x = 10 + currentMouseX * 5;
      purpleLight.position.y = 10 - currentMouseY * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="global-3d-background-canvas"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
