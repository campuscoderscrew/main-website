import React from 'react';

export function Footer() {
  const logoSize = "text-6xl"
  return (
    <footer className="bg-[#FFF2F2] text-black py-8 h-4/5" id='contact-us'>
      <div className="container mx-auto">
        <h1 className='text-[#7886C7] font-bold text-center text-6xl mb-5'>Reach Out To Us!</h1>
        <div className="flex justify-center space-x-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${logoSize} hover:text-[#E1306C] transition-colors`}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${logoSize} hover:text-[#333] transition-colors`}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${logoSize} hover:text-[#7289DA] transition-colors`}
            aria-label="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${logoSize} hover:text-[#0077B5] transition-colors`}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <h2 className='text-3xl text-center text-[#2D336B] font-neuton font-bold mt-5'>campuscoderscrew@gmail.com</h2>
      </div>
    </footer>
  );
} 