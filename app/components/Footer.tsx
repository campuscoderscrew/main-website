import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#2D336B] text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8 font-neuton text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            Instagram
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            GitHub
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            Discord
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
} 