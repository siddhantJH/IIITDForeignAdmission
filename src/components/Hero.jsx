// components/HeroSection.js

import React, { useRef } from 'react';

const HeroSection = () => {
  const scrollToRef = useRef(null);

  const handleScroll = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('/path/to/hero-image.jpg')` }}></div>
        <div className="relative z-10 text-center p-8">
          <h1 className="text-5xl font-extrabold mb-4">Welcome International Students</h1>
          <p className="text-xl mb-8">We're here to support you every step of the way.</p>
          <button
            onClick={handleScroll}
            className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
