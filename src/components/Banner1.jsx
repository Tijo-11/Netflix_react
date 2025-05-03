import React from 'react';
import backgroundImage from '../assets/Background.jpeg';

export default function Banner1() {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <h3 className="text-xl sm:text-2xl">
          Starts at ₹149. Cancel at any time.
        </h3>
      </div>
    </div>
  );
}