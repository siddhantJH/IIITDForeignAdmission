// components/LatestPosts.js

import React from 'react';

const latestPosts = [
  {
    title: 'Understanding Cultural Differences',
    image: '/images/cultural-differences.jpg',
    summary: 'Explore how to navigate and embrace cultural differences while studying abroad.',
    date: 'August 15, 2024',
    link: '/blog/understanding-cultural-differences',
  },
  {
    title: 'Finding the Perfect Accommodation',
    image: '/images/accommodation-tips.jpg',
    summary: 'Tips and advice for finding accommodation that suits your needs and budget.',
    date: 'August 12, 2024',
    link: '/blog/finding-perfect-accommodation',
  },
  // Add more posts as needed
];

const LatestPosts = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">{post.title}</h3>
                <p className="text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6">{post.summary}</p>
                <a href={post.link} className="text-indigo-600 font-semibold hover:text-indigo-800">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
