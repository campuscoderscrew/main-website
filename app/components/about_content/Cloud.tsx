import React from 'react';

interface CloudProps {
  className?: string; // For positioning (e.g., 'absolute top-5 left-10')
  children?: React.ReactNode; // To potentially place text inside/on the cloud
}

const Cloud: React.FC<CloudProps> = ({ className = '', children }) => {
  return (
    <div className={`absolute ${className}`}>
      {/* Simple SVG Cloud Shape */}
      <svg
        width="200" // Adjust size as needed
        height="100"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm" // Optional shadow
      >
        <path
          d="M162.5 87.5C184.5 87.5 200 78 200 62.5C200 47 184.5 37.5 162.5 37.5C162.5 18.75 143.75 0 125 0C108.75 0 87.5 12.5 87.5 31.25C87.5 31.25 81.25 25 75 25C62.5 25 50 37.5 50 50C50 56.25 56.25 68.75 62.5 68.75H37.5C18.75 68.75 0 78.125 0 93.75C0 109.375 18.75 100 37.5 100H150C168.75 100 162.5 87.5 162.5 87.5Z"
          fill="white"
        />
      </svg>
      {/* Positioning container for potential children */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Cloud;