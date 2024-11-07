// components/ContactSection.js

import React from 'react';

const ContactSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">Email: support@university.edu</p>
            <p className="mb-2">Phone: +1 234 567 890</p>
            <p>Address: 123 University Avenue, City, Country</p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-4 rounded-lg text-gray-800"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 rounded-lg text-gray-800"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 mb-4 rounded-lg text-gray-800"
                rows="4"
              ></textarea>
              <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
