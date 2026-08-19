import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CareerInterests } from './components/CareerInterests';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { PracticalLearning } from './components/PracticalLearning';
import { NCCAndSoftSkills } from './components/NCCAndSoftSkills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Global3DBackground } from './components/Global3DBackground';
import { PersonalChatbot } from './components/PersonalChatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'career-interests',
      'skills',
      'projects',
      'education',
      'learning',
      'additional-profile',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-[#f1f1f5] selection:bg-purple-600/40 selection:text-white relative overflow-x-hidden">
      
      {/* 1. Global 3D Interactive WebGL Particle & Neural Node Background (Unified across all sections) */}
      <Global3DBackground />

      {/* 2. Global Dot Grid Matrix (The exact cybernetic dot grid from Home section) */}
      <div 
        className="fixed inset-0 bg-[radial-gradient(#37246b_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-40 pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* 3. Global Ambient Radial Glow Lights */}
      <div 
        className="fixed top-1/4 left-10 w-[700px] h-[700px] bg-purple-950/25 rounded-full blur-[160px] pointer-events-none z-0"
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-1/4 right-10 w-[700px] h-[700px] bg-violet-950/20 rounded-full blur-[150px] pointer-events-none z-0"
        aria-hidden="true" 
      />

      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections (Layered above 3D and dot background) */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Career Interests (What I'm Looking For) */}
        <CareerInterests />

        {/* 4. Technical Stack / Skills */}
        <Skills />

        {/* 5. Featured Projects Showcase */}
        <Projects />

        {/* 6. Education Section */}
        <Education />

        {/* 7. AI Tools & Practical Learning */}
        <PracticalLearning />

        {/* 8. NCC & Soft Skills */}
        <NCCAndSoftSkills />

        {/* 9. Contact Section & CTA */}
        <Contact />
      </main>

      {/* 10. Minimalist Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Personal AI Chatbot Assistant for Katta Deepthi */}
      <PersonalChatbot />

      {/* Back to Top Floating Button */}
      <BackToTop />
    </div>
  );
}
