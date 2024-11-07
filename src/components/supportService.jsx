// components/SupportServices.js

import React from 'react';

const services = [
  { title: 'Visa Assistance', description: 'Help with student visa applications and renewals.' },
  { title: 'Accommodation Guidance', description: 'Support in finding both on-campus and off-campus housing.' },
  { title: 'Health and Wellness', description: 'Access to medical services and mental health support.' },
  { title: 'Career Counseling', description: 'Guidance on internships, job placements, and career development.' },
  { title: 'Cultural Integration', description: 'Workshops and events to help you adjust and thrive.' },
  { title: 'Language Support', description: 'Language classes and tutoring services to help you succeed.' },
  { title: 'Orientation Program', description: 'IRC conducts a comprehensive orientation for international students, introducing them to campus life, faculty, and academic expectations. Special events are organized for international students.' },
  { title: 'International Affairs Office', description: 'Dedicated to assisting international students with services like FRRO support, academic advising, and guidance for adjusting to life at IIITD.' },
  { title: 'Counseling Services', description: 'Confidential counseling for personal, academic, or cultural challenges. Professional counselors are available for mental health support and stress management.' },
  { title: 'Academic Support', description: 'Dedicated academic support for international students, with approachable faculty available to assist with coursework.' },
  { title: 'Health Services', description: 'On-campus health center with doctors, basic medical care, and emergency services.' },
];

const SupportServices = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-800 tracking-tight">
          Our Support Services
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          At IIITD, we offer a wide range of services to ensure that international students feel at home, excel in their studies, and make the most of campus life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportServices;
