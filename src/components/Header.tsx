import React, { useState } from 'react';
import CCC_icon from "../../public/campus_coders_crew_icon.png"

import { Link } from "react-router-dom";
import { Padding } from './Padding';

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent text-white p-2 md:p-0 z-50 flex">
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
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
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
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
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
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
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
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
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
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
            )}
          </div>
        </nav>
      </div>
      <Padding/>
    </header>
  );
} 