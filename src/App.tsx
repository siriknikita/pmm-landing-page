import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { FAQ } from './components/FAQ';
import { CookieConsent } from './components/CookieConsent';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // For grid glow
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x: `${x}%`, y: `${y}%` });
      
      // For cursor glow
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('.snap-section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop - sectionHeight / 4) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="snap-container">
        <div className="grid-background fixed inset-0 opacity-70" />
        <div 
          className="grid-glow" 
          style={{ 
            '--x': mousePosition.x, 
            '--y': mousePosition.y 
          } as React.CSSProperties} 
        />
        <div 
          className="cursor-glow"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`
          }}
        />
        <div className="relative z-10">
          <Hero />
          <Features />
          <Installation />
          <FAQ />
        </div>
      </div>
      {showCookieConsent && <CookieConsent onAccept={() => setShowCookieConsent(false)} />}
    </div>
  );
}

export default App;