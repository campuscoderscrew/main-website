import React from 'react';

interface BridgeProps {
  className?: string; // For positioning
}

// Simple representation of the bridge railing
const Bridge: React.FC<BridgeProps> = ({ className = '' }) => {
  return (
    <div className={`absolute w-full h-16 bg-white ${className}`}>
      {/* Container for the horizontal blue lines */}
      <div className="relative w-full h-full flex flex-col justify-center items-center space-y-3 px-4">
         {/* Top blue line */}
        <div className="w-full h-1.5 bg-blue-800"></div>
         {/* Bottom blue line */}
        <div className="w-full h-1.5 bg-blue-800"></div>
      </div>
       {/* Optional: Add vertical posts - This is tricky to layer correctly with just divs/tailwind easily.
           You could absolutely position several thin white divs behind the blue lines if needed.
           Example for one post (repeat/map as needed):
       <div className="absolute bottom-0 top-0 left-10 w-3 bg-white z-[-1]"></div>
       */}
    </div>
  );
};

export default Bridge;