// pages/InternationalBlogPage.js

import React from 'react';
import BlogHeroSection from '../components/BlogHero';
import FeaturedPosts from '../components/FeaturedPosts';
import LatestPosts from '../components/Latestposts';
import CategoriesSection from '../components/CategoriesSection';
import SubscriptionSection from '../components/SubscriptionSection';
// import Footer from '../components/Footer';

const InternationalBlogPage = () => {
  return (
    <div>
      <BlogHeroSection />
      <FeaturedPosts />
      <LatestPosts />
      <CategoriesSection />
      <SubscriptionSection />
      {/* <Footer /> */}
    </div>
  );
};

export default InternationalBlogPage;
