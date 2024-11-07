// components/FeaturedPosts.js

import React from 'react';

const featuredPosts = [
  {
    title: 'Top 10 Tips for International Students',
    image: '/images/tips-for-international-students.jpg',
    summary: 'Get the best advice to help you thrive in a new country and succeed academically.',
    link: '/blog/top-10-tips-for-international-students',
  },
  {
    title: 'How to Manage Finances as an International Student',
    image: '/images/manage-finances.jpg',
    summary: 'Learn how to budget, save, and manage your finances effectively while studying abroad.',
    link: '/blog/manage-finances-international-students',
  },
];

const FeaturedPosts = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">{post.title}</h3>
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

export default FeaturedPosts;
