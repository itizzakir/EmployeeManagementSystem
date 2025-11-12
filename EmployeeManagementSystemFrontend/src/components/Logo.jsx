// src/components/Logo.jsx
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-purple-600"
      >
        {/* Custom SVG: Stylized 'E' with upward arrow for empowerment, HR/office style - simple geometric */}
        <path
          d="M6 6h14v4H6V6zm0 8h10v8H6v-8zm16-8h4v20h-4V6z"
          fill="currentColor"
        />
        {/* Arrow for growth/empowerment */}
        <path
          d="M22 12l4 4-4 4M26 16h-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold text-purple-600">Empower</span>
    </div>
  );
};

export default Logo;