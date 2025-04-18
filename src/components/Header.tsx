import React from 'react';
import CCC_icon from "../../public/campus_coders_crew_icon.png"

import { Link } from "react-router-dom";
import { Padding } from './Padding';



export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent text-white p-2 md:p-0 z-50 flex">
      <Padding/>
      <div className="space-x-6 flex-10 md:py-2">
        <a href="#about">
          <img src={CCC_icon} className="h-10"></img>
        </a>
      </div>

      <div className="flex-70 justify-between items-center align-middle md:mt-2">  
        <nav className="space-x-6 font-neuton text-2xl flex justify-end">
          <Link to="/" className="hover:text-gray-300 transition-colors">HOME</Link>
          <Link to="/requests" className="hover:text-gray-300 transition-colors">REQUESTS</Link>
          <Link to="/events" className="hover:text-gray-300 transition-colors">EVENTS</Link>
          <Link to="/crew" className="hover:text-gray-300 transition-colors">CREW</Link>
          <Link to="/archive" className="hover:text-gray-300 transition-colors">ARCHIVE</Link>
        </nav>
      </div>
      <Padding/>
    </header>
  );
} 