import React, { useState, useEffect } from 'react';
import CCC_icon from "../../public/campus_coders_crew_icon.png"

import { Link } from "react-router-dom";
import { Padding } from './Padding';

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine the approximate point where the hero section ends
      // and the light background begins
      const scrollPosition = window.scrollY;
      setScrolledPastHero(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = scrolledPastHero ? 'text-black' : 'text-white';
  const underlineColor = scrolledPastHero ? 'bg-black' : 'bg-white';

  return (
    <header className={`fixed top-0 left-0 right-0 bg-transparent p-2 md:p-0 z-50 flex ${textColor}`}>
      <Padding/>
      <div className="flex-70 justify-between items-center align-middle md:mt-2">  
        <nav className="space-x-6 font-neuton text-2xl flex justify-end">
          <div className="relative">
            <Link 
              to="/" 
              className="transition-colors"
              onMouseEnter={() => setHoveredLink('HOME')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              HOME
            </Link>
            {hoveredLink === 'HOME' && (
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor}`} />
            )}
          </div>
          
          <div className="relative">
            <Link 
              to="/requests" 
              className="transition-colors"
              onMouseEnter={() => setHoveredLink('REQUESTS')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              REQUESTS
            </Link>
            {hoveredLink === 'REQUESTS' && (
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor}`} />
            )}
          </div>
          
          <div className="relative">
            <Link 
              to="/events" 
              className="transition-colors"
              onMouseEnter={() => setHoveredLink('EVENTS')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              EVENTS
            </Link>
            {hoveredLink === 'EVENTS' && (
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor}`} />
            )}
          </div>
          
          <div className="relative">
            <Link 
              to="/crew" 
              className="transition-colors"
              onMouseEnter={() => setHoveredLink('CREW')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              CREW
            </Link>
            {hoveredLink === 'CREW' && (
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor}`} />
            )}
          </div>
          
          <div className="relative">
            <Link 
              to="/archive" 
              className="transition-colors"
              onMouseEnter={() => setHoveredLink('ARCHIVE')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              ARCHIVE
            </Link>
            {hoveredLink === 'ARCHIVE' && (
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor}`} />
            )}
          </div>
        </nav>
      </div>
      <Padding/>
    </header>
  );
} 