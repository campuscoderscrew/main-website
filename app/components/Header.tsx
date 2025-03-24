import React from 'react';
import CCC_icon from "../../public/campus_coders_crew_icon.png"

import { Padding } from './Padding';



export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2D336B] text-white p-2 md:p-0 z-50 flex">
      <Padding/>
      <div className="space-x-6 flex-10">
        <a href="#about">
          <img src={CCC_icon} className="h-10"></img>
        </a>
      </div>

      <div className="flex-70 justify-between items-center align-middle">  
        <nav className="space-x-6 font-neuton text-2xl flex justify-end">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#team" className="hover:text-gray-300 transition-colors">Our Team</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a>
        </nav>
      </div>
      <Padding/>
    </header>
  );
} 