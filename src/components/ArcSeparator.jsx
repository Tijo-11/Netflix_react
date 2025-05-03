import React from 'react';

export default function ArcSeparator() {
  return (
    <div className="bg-[#141414]">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-16 text-gray-800"
      >
        <path
          fill="currentColor"
          d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}