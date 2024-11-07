// components/SubscriptionSection.js

import React from 'react';

const SubscriptionSection = () => {
  return (
    <div className="py-16 bg-indigo-600 text-white text-center">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold mb-8">Stay Updated</h2>
        <p className="text-lg mb-8">Subscribe to our blog to receive the latest posts directly in your inbox.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-4 rounded-l-full text-gray-800"
          />
          <button className="bg-purple-600 text-white font-bold py-4 px-8 rounded-r-full hover:bg-purple-800 transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionSection;
