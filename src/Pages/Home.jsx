


import React, { useRef } from "react";
import building1 from '../assets/collegecontent/building1.jpg';
import '../index.css';
import PlayerComponent from "../components/VideoPlayer";
import { FaUniversity, FaQuestionCircle, FaInfoCircle, FaPhoneAlt, FaRobot } from 'react-icons/fa';
import Testimonials from "../components/Testimonials";
import NewsCarousel from "../components/NewsCarousel";
import { Link } from "react-router-dom";
import newsItems from "../components/NewsItems";
import NewsTicker from "../components/NewsTicker";
import LatestUpdates from "../components/LatestUpdates";
import FloatingDivsPage from "../components/FloatingDivPage";

function Home() {
    // Create a ref for the About Us section
    const aboutSectionRef = useRef(null);

    // Function to handle scroll on button click
    const scrollToAboutSection = () => {
        aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Collage image and name */}
            <div
                style={{ height: '91vh', backgroundImage: `url(${building1})` }}
                className="bg-cover bg-center text-white p-4 w-full flex items-center justify-center shadow-md"
            >
                <NewsTicker newsItems={LatestUpdates} interval={2000} />
                <NewsCarousel newsItems={newsItems} interval={2000} direction="left"/>
            </div>

            {/* About Us section with reduced height */}
            <div style={{ backgroundColor: "#022742" }} className="w-full"> {/* Changed from h-128 to h-64 */}
                <div className="grid place-items-center mb-5 pt-2">
                    <h1 className="text-white text-4xl font-bold">Explore IIITD</h1>
                    <button onClick={scrollToAboutSection} className="hover:translate-y-[-5px] transition-transform">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* About Us content */}
            <div ref={aboutSectionRef} style={{ height: '50vh' }} className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-50">
                <div className="w-full md:w-1/2 flex flex-col justify-center p-5">
                    <h2 className="text-4xl font-roboto text-[#219C90] mb-4">About our Institute</h2>
                    <p className="font-normal text-lg text-[#1A2130]">
                        Indraprastha Institute of Information Technology, Delhi (aka. IIIT-Delhi or IIIT-D) was created as a State University by an act of Govt. of NCT of Delhi (The IIIT Delhi Act, 2007) empowering it to do research and development and grant degrees. In a relatively short time, it has earned an excellent reputation in India and abroad for being a center of quality education and research in IT and interdisciplinary <a href="https://www.iiitd.ac.in/about" className="text-[#219C90] font-semibold hover:underline">Know More</a>.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center p-5">
                    <PlayerComponent />
                </div>
            </div>
            <div>
              <FloatingDivsPage />
            </div>
            {/* Options Section */}
      <div className="bg-[#022742] h-64 flex justify-around items-center px-6 py-8">
        {/* Campus Facility */}
      <Link to="/Campusfacilities" className="w-1/6">
        <div className="bg-[#036a9c] h-32 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold text-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-[#0582ca] hover:shadow-2xl">
          <FaUniversity className="text-2xl mb-2" />
          <span>Campus Facility</span>
          <div className="mt-2 w-8 h-1 bg-white rounded transition-all duration-300"></div>
        </div>
      </Link>

      {/* Admission Help */}
      <Link to="/application-process" className="w-1/6">
        <div className="bg-[#036a9c] h-32 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold text-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-[#0582ca] hover:shadow-2xl">
          <FaQuestionCircle className="text-2xl mb-2" />
          <span>Admission Help</span>
          <div className="mt-2 w-8 h-1 bg-white rounded transition-all duration-300"></div>
        </div>
      </Link>

      {/* About College */}
      <Link to="/about-college" className="w-1/6">
        <div className="bg-[#036a9c] h-32 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold text-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-[#0582ca] hover:shadow-2xl">
          <FaInfoCircle className="text-2xl mb-2" />
          <span>About College</span>
          <div className="mt-2 w-8 h-1 bg-white rounded transition-all duration-300"></div>
        </div>
      </Link>

      {/* Contact Us */}
      <Link to="/Contact-Us" className="w-1/6">
        <div className="bg-[#036a9c] h-32 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold text-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-[#0582ca] hover:shadow-2xl">
          <FaPhoneAlt className="text-2xl mb-2" />
          <span>Contact Us</span>
          <div className="mt-2 w-8 h-1 bg-white rounded transition-all duration-300"></div>
        </div>
      </Link>

      {/* Chatbot */}
      <Link to="/chatbot" className="w-1/6">
        <div className="bg-[#036a9c] h-32 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold text-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-[#0582ca] hover:shadow-2xl">
          <FaRobot className="text-2xl mb-2" />
          <span>Ask Chatbot</span>
          <div className="mt-2 w-8 h-1 bg-white rounded transition-all duration-300"></div>
        </div>
      </Link>
      </div>
            {/* Testimonial section */}
            <div className="py-10">
                <Testimonials />
            </div>
        </>
    );
}

export default Home;
