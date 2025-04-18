import React from 'react';

export const StreetLamp: React.FC = () => {
  return (
    <svg
      className="w-16 h-32"
      viewBox="0 0 50 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lamp post */}
      <rect x="22" y="30" width="6" height="60" fill="#0F172A" />
      
      {/* Lamp light body */}
      <rect x="18" y="20" width="14" height="12" fill="#FFFFFF" />
      
      {/* Lamp top (circle) */}
      <circle cx="25" cy="15" r="5" fill="#0F172A" />
    </svg>
  );
};
