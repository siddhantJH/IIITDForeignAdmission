// components/BlogHeroSection.js

import React from 'react';

const BlogHeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 h-80 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('/images/blog-hero.jpg')` }}></div>
      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl font-extrabold mb-4">International Student Blog</h1>
        <p className="text-lg mb-8">Insights, stories, and tips for thriving as an international student.</p>
        <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition duration-300">Explore Posts</button>
      </div>
    </div>
  );
};

export default BlogHeroSection;
