import React from 'react';
import { Link } from 'react-router';
import CCC_icon from "../../public/campus_coders_crew_icon.png"

import { Padding } from './Padding';

export function Header() {
  return (
    <nav>
      <header className="fixed top-0 left-0 right-0 bg-transparent text-white p-2 md:p-0 z-50 flex">
        <Padding/>
        <div className="flex-70 justify-between items-center align-middle md:mt-2">  
          <nav className="space-x-6 font-neuton text-2xl flex justify-end">
            <Link to="/" className="transition-colors">HOME</Link>
            <Link to="/apply" className="transition-colors">APPLY</Link>
            <Link to="/events" className="transition-colors">EVENTS</Link>
            <Link to="/crew" className="transition-colors">CREW</Link>
            <Link to="/archive" className="transition-colors">ARCHIVE</Link>
          </nav>
        </div>
        <Padding/>
      </header>
    </nav>
    
  );
} 