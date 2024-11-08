import React from 'react';
import { FaRegHandshake, FaConciergeBell, FaUserMd, FaBuilding, FaUtensils, FaHome, FaUserGraduate, FaCalendarAlt, FaHandsHelping, FaBasketballBall, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CampusFacilities = () => {
  return (
    <div className="bg-gradient-to-b from-[#036a9c] to-[#022742] text-white min-h-screen pt-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16 text-center">
        <h1 className="text-5xl font-bold mb-8 text-[#f0f4f8]">Campus Facilities</h1>
        <p className="text-lg text-[#e1eaf5]">
          Explore the various facilities that make our campus a great place to live, study, and grow.
        </p>
      </div>

      {/* Support Services Section */}
      <section className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#022742]">Support Services for International Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaRegHandshake size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Orientation Program</h3>
                <p>A dedicated orientation by the IRC introduces students to campus life, faculty, and cultural events like Halloween and Onam.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaConciergeBell size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">International Affairs Office</h3>
                <p>Assistance with FRRO support, academic advising, and campus adaptation guidance.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaUserMd size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Counselling Services</h3>
                <p>Confidential counseling for mental health, stress management, and adjustment challenges with professional counselors.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaUserGraduate size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Academic Support</h3>
                <p>A dedicated team assists international students with academic needs and faculty guidance.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaHandsHelping size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Health Services</h3>
                <p>The campus health center provides medical consultations, basic care, and emergency services.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Living Arrangements Section */}
      <section className="bg-gradient-to-r from-[#4a90e2] to-[#022742] text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6 text-center">Living Arrangements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="space-y-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaHome size={30} className="mx-auto text-white" />
              <h3 className="text-lg font-semibold">On-Campus Housing</h3>
              <p>Comfortable hostels with amenities like internet, common rooms, and laundry services.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="space-y-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaBuilding size={30} className="mx-auto text-white" />
              <h3 className="text-lg font-semibold">Living Conditions</h3>
              <p>Secure hostels with 24/7 security, regular maintenance, and support staff.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="space-y-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaUtensils size={30} className="mx-auto text-white" />
              <h3 className="text-lg font-semibold">Meal Plans</h3>
              <p>Dining facilities offer vegetarian and non-vegetarian options catering to various dietary needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#022742]">Engagement Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaUsers size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Student Clubs and Organizations</h3>
                <p>A variety of clubs for cultural, technical, and social interests to connect with others.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaCalendarAlt size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Cultural Events</h3>
                <p>Celebrations of diverse festivals allow international students to share their culture and experience Indian traditions.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaUserGraduate size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Workshops and Seminars</h3>
                <p>Regular sessions on various topics to enhance knowledge and networking opportunities.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaHandsHelping size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Volunteer Opportunities</h3>
                <p>Participate in community service through programs like Summer Camp and Teach-Like-a-Friend.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-start space-x-4 border border-gray-300 p-6 rounded-lg shadow-md"
            >
              <FaBasketballBall size={30} className="text-[#022742]" />
              <div>
                <h3 className="text-lg font-semibold">Sports and Recreation</h3>
                <p>Access to gym, swimming pool, and courts for various sports.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#022742] text-[#e1eaf5] py-8 text-center">
        <p className="text-sm">&copy; 2024 IIITD. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CampusFacilities;
