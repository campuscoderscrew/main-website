import React from 'react';
import CCC_icon from "../assets/campus_coders_crew_icon.png"


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2D336B] text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <a href="#about">
            <img src={CCC_icon} className="h-10"></img>
          </a>
        </div>
        <nav className="space-x-6 font-neuton text-xl">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#team" className="hover:text-gray-300 transition-colors">Our Team</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a>
        </nav>
      </div>
    </header>
  );
} 