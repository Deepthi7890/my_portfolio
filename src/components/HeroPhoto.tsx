import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Terminal, Code2, Database, Brain, Cpu, Camera, Upload, Trash2, Check } from 'lucide-react';

export const HeroPhoto: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Load custom photo if previously uploaded
  useEffect(() => {
    const savedPhoto = localStorage.getItem('custom_profile_photo');
    if (savedPhoto) {
      setProfileImage(savedPhoto);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setProfileImage(dataUrl);
      setImageError(false);
      try {
        localStorage.setItem('custom_profile_photo', dataUrl);
      } catch (err) {
        console.warn('Could not cache image in localStorage', err);
      }
      setShowUploadSuccess(true);
      setTimeout(() => setShowUploadSuccess(false), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProfileImage(null);
    localStorage.removeItem('custom_profile_photo');
    setImageError(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const defaultImageSources = [
    '/profile.jpg',
    '/profile.jpeg',
    '/profile.png',
    '/Professional photo 2.jpeg',
    '/assets/profile.jpg',
    '/katta_deepthi.jpg'
  ];

  const currentImageSrc = profileImage || defaultImageSources[0];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="hero-3d-portrait-stage"
      className="relative w-full max-w-md lg:max-w-lg mx-auto flex items-center justify-center select-none"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Hidden File Picker */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* 3D Container with dynamic transform */}
      <div
        className="relative w-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 0 (Deepest Z): Intense Circular Radial Purple Halo Glow */}
        <div
          className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none -z-20"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(147, 51, 234, 0.25) 45%, rgba(88, 28, 135, 0.08) 70%, transparent 85%)',
            filter: 'blur(35px)',
            transform: 'translateZ(-60px)',
          }}
        />

        {/* Ambient Secondary Violet Glow */}
        <div
          className="absolute -inset-10 bg-gradient-to-tr from-purple-600/30 via-violet-900/20 to-indigo-900/10 rounded-full blur-[80px] opacity-80 -z-30 pointer-events-none"
          style={{ transform: 'translateZ(-90px)' }}
        />

        {/* Floating 3D Glossy Sphere (matching the purple sphere in the user's reference photo) */}
        <div
          className="absolute -right-4 sm:-right-8 top-12 sm:top-16 z-30 pointer-events-none"
          style={{
            transform: `translateZ(70px) translate(${tilt.rotateY * 0.8}px, ${-tilt.rotateX * 0.8}px)`,
            transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease-out',
          }}
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#c084fc] via-[#9333ea] to-[#4c1d95] shadow-2xl shadow-purple-900/80 flex items-center justify-center border border-purple-300/40 animate-bounce duration-1000">
            {/* Specular Highlight */}
            <div className="absolute top-2 left-2.5 w-4 h-4 rounded-full bg-white/60 blur-[1px]" />
            {/* Glow Aura */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md" />
            <Cpu className="w-5 h-5 text-white/90 relative z-10" />
          </div>
        </div>

        {/* Layer 2: Main 3D Framed Cutout Card */}
        <div
          className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[370px] lg:max-w-[400px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#18142c] via-[#0d0c18] to-[#05050a] border-2 border-purple-500/40 shadow-2xl shadow-purple-950/80 group cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          title="Click to add or change profile photo"
          style={{
            transform: 'translateZ(20px)',
            boxShadow: '0 25px 60px -15px rgba(147, 51, 234, 0.35), 0 0 40px rgba(88, 28, 135, 0.25)',
          }}
        >
          {/* Top Radial Flare inside frame */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-purple-500/25 via-purple-500/5 to-transparent pointer-events-none z-10" />

          {/* Matrix Grid inside */}
          <div className="absolute inset-0 bg-[radial-gradient(#9333ea_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

          {/* Profile Image with Cutout Rendering */}
          {!imageError ? (
            <img
              src={currentImageSrc}
              onError={() => {
                if (!profileImage) {
                  setImageError(true);
                }
              }}
              alt="Katta Deepthi"
              id="hero-profile-image"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter contrast-110 brightness-105"
            />
          ) : (
            /* 3D Stylized Persona Avatar fallback with prominent Upload action */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-b from-purple-950/60 via-zinc-950 to-black">
              <div className="w-52 h-52 rounded-full bg-purple-600/30 blur-3xl absolute" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-500 p-[2.5px] shadow-2xl shadow-purple-900/90 mb-5 relative group/avatar">
                  <div className="w-full h-full rounded-[22px] bg-[#0c0c16] flex items-center justify-center flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent" />
                    <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-purple-400">
                      KD
                    </span>
                    <span className="text-[10px] text-purple-300 font-mono tracking-widest mt-1 uppercase font-semibold">
                      AI & ML
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white tracking-tight">Katta Deepthi</h3>
                <p className="text-xs text-purple-300 font-mono mt-1 font-medium">B.Tech • AI & Data Science</p>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-950 transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Your Photo</span>
                </button>
              </div>
            </div>
          )}

          {/* Hover Overlay with Change Photo Trigger */}
          <div className="absolute inset-0 bg-purple-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-20 p-4">
            <div className="p-3 rounded-full bg-purple-600 text-white shadow-xl shadow-purple-950/80">
              <Camera className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-black/60 px-3 py-1.5 rounded-lg border border-purple-500/40">
              {profileImage ? 'Change Photo' : 'Upload Profile Photo'}
            </span>
            {profileImage && (
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/80 border border-red-500/40 text-[11px] font-mono text-red-200 hover:bg-red-900 transition-colors"
              >
                <Trash2 className="w-3 h-3 text-red-400" />
                <span>Reset to Default</span>
              </button>
            )}
          </div>

          {/* Upload Success Toast */}
          {showUploadSuccess && (
            <div className="absolute top-4 inset-x-4 z-30 p-2.5 rounded-xl bg-purple-950/90 border border-purple-400 text-xs text-white flex items-center justify-center gap-2 shadow-2xl animate-in fade-in zoom-in-95">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">Profile Photo Updated!</span>
            </div>
          )}

          {/* Bottom Edge Cinematic Vignette */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05050a] via-[#05050a]/70 to-transparent pointer-events-none z-10" />

          {/* Tech Corner Reticles */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-purple-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
