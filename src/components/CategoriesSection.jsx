// components/CategoriesSection.js

import React from 'react';

const categories = [
  { name: 'Finance', link: '/blog/category/finance' },
  { name: 'Accommodation', link: '/blog/category/accommodation' },
  { name: 'Culture', link: '/blog/category/culture' },
  { name: 'Study Tips', link: '/blog/category/study-tips' },
  // Add more categories as needed
];

const CategoriesSection = () => {
  return (
    <div className="py-16 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Browse by Categories</h2>
        <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <a key={index} href={category.link} className="m-4 bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
