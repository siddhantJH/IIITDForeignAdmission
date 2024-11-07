// pages/InternationalSupportPage.js

import React from 'react';
import HeroSection from '../components/Hero';
import SupportServices from '../components/supportService';
import TestimonialsSectionforsupport from '../components/TestimonialSectionforsupport';
import ContactSection from '../components/ContactSection';

const InternationalSupportPage = () => {
  return (
    <div>
      <HeroSection />
      <SupportServices />
      <TestimonialsSectionforsupport />
      <ContactSection />
    </div>
  );
};

export default InternationalSupportPage;
