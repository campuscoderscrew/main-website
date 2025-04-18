import React from 'react'

export function Boat() {
    return (
        <svg
          className="w-52 h-52"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Boat hull */}
          <path
            d="M 20 160 L 180 160 C 165 140 125 120 100 120 C 75 120 35 140 20 160 Z"
            fill="#0F172A" 
          />
          
          {/* Sail */}
          <polygon
            points="100,20 135,120 65,120"
            fill="#0F172A"
          />
          
          {/* Text on the sail */}
          <text
            x="75"
            y="85"
            fill="#FFFFFF"
            fontSize="20"
            fontWeight="bold"
          >
            CCC
          </text>
        </svg>
    )
}