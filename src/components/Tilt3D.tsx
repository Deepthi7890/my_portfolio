import React, { useRef, useState, useCallback } from 'react';

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  scale?: number;
  id?: string;
  borderRadius?: string;
}

export const Tilt3D: React.FC<Tilt3DProps> = ({
  children,
  className = '',
  maxTilt = 10,
  glareOpacity = 0.35,
  scale = 1.02,
  id,
  borderRadius = '1rem',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [borderSheenStyle, setBorderSheenStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 3D Perspective Rotation
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      // Dynamic Specular Glare Hotspot coordinates
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      // Dynamic angle for edge light sheen
      const angleRad = Math.atan2(y - centerY, x - centerX);
      const angleDeg = (angleRad * (180 / Math.PI) + 180) % 360;

      // Specular Glare Overlay
      setGlareStyle({
        opacity: glareOpacity,
        background: `radial-gradient(circle 280px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.32) 0%, rgba(216, 180, 254, 0.22) 20%, rgba(147, 51, 234, 0.12) 45%, transparent 75%)`,
      });

      // Border Specular Sheen
      setBorderSheenStyle({
        opacity: 0.8,
        background: `conic-gradient(from ${angleDeg}deg at 50% 50%, rgba(192, 132, 252, 0.7) 0deg, rgba(147, 51, 234, 0.2) 60deg, transparent 120deg, transparent 240deg, rgba(147, 51, 234, 0.2) 300deg, rgba(192, 132, 252, 0.7) 360deg)`,
      });
    },
    [maxTilt, glareOpacity, scale]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
    setBorderSheenStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        borderRadius,
      }}
      className={`relative group/tilt overflow-hidden ${className}`}
    >
      {/* 1. Underlying Children Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* 2. Dynamic Specular Light Glare Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-20 mix-blend-screen"
        style={{
          ...glareStyle,
          borderRadius,
        }}
      />

      {/* 3. Dynamic Specular Border Sheen Highlight */}
      <div
        className="absolute -inset-[1px] pointer-events-none transition-opacity duration-300 z-15 p-[1px] rounded-[inherit]"
        style={{
          ...borderSheenStyle,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />
    </div>
  );
};
