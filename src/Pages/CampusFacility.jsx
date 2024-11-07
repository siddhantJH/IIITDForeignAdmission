// pages/CampusFacilities.js

import React from 'react';

const CampusFacilities = () => {
  return (
    <div className="bg-gradient-to-b from-[#036a9c] to-[#022742] text-white min-h-screen pt-20"> {/* Added top padding */}
      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16 text-center">
        <h1 className="text-5xl font-bold mb-8 text-[#f0f4f8]"> {/* Softer text color */}
          Campus Facilities
        </h1>
        <p className="text-lg text-[#e1eaf5]"> {/* Lightened text color for better contrast */}
          Explore the various facilities that make our campus a great place to live, study, and grow.
        </p>
      </div>

      {/* Virtual Campus Tour Section */}
      <section className="bg-gray-100 text-gray-900 py-16"> {/* Lightened background */}
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#022742]"> {/* Darker text for contrast */}
            Virtual Campus Tour
          </h2>
          <p className="text-lg mb-6 text-center text-gray-700">
            Take a 360-degree virtual tour of our campus and experience the modern infrastructure, libraries, and state-of-the-art labs from the comfort of your home.
          </p>
          <div className="flex justify-center">
            <iframe 
              className="w-full lg:w-3/4 h-80 rounded-lg shadow-xl" 
              src="https://www.youtube.com/embed/your-virtual-tour-video-link"
              title="Virtual Campus Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Hostel and Mess Facility Section */}
      <section className="py-16 bg-gradient-to-r from-[#4a90e2] to-[#022742] text-white"> {/* Softer gradient */}
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6 text-center">Hostel and Mess Facility</h2>
          <p className="text-lg mb-6 text-center">
            Our hostels are designed to provide a comfortable and secure living environment. With a well-equipped mess facility offering nutritious meals, we ensure students feel at home.
          </p>
          <div className="flex justify-center items-center flex-col lg:flex-row">
            <img 
              src="/path/to/hostel-image.jpg" 
              alt="Hostel" 
              className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-6"
            />
            <img 
              src="/path/to/mess-image.jpg" 
              alt="Mess" 
              className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Well-Being Cell Section */}
      <section className="bg-gray-100 text-gray-900 py-16"> {/* Lighter section for contrast */}
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#022742]"> {/* Darker blue for titles */}
            Well-Being Cell
          </h2>
          <p className="text-lg mb-6 text-center text-gray-700">
            Our Well-Being Cell provides holistic support to students through counseling, mental health awareness programs, and recreational activities to ensure their emotional and psychological well-being.
          </p>
          <div className="flex justify-center">
            <img 
              src="/path/to/well-being-image.jpg" 
              alt="Well-Being Cell" 
              className="w-full lg:w-3/4 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#022742] text-[#e1eaf5] py-8 text-center"> {/* Softer footer with lighter text */}
        <p className="text-sm">&copy; 2024 Your University Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CampusFacilities;
