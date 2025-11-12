// src/components/common/Logo.jsx
import React from 'react';

const Logo = ({ className }) => {
  return (
    <a href="/" className={`flex items-center space-x-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-purple-600"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3ZM16 27C10.486 27 6 22.514 6 17H12V21C12 21.552 12.448 22 13 22H19C19.552 22 20 21.552 20 21V11C20 10.448 19.552 10 19 10H12V15H6C6 9.486 10.486 5 16 5C21.514 5 26 9.486 26 15V17C26 22.514 21.514 27 16 27Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-2xl font-bold text-slate-800">Empower</span>    </a>
  );
};

export default Logo;