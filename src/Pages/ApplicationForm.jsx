import React from "react";
import '../styles/Application.css'; // Ensure your CSS is properly set up

// Image imports (replace with your actual image paths)
import btechImage from '../assets/btech.svg'; // B.Tech image
import mtechImage from '../assets/mtech.svg'; // M.Tech image
import phdImage from '../assets/phd.svg'; // Ph.D. image

function Application() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-screen pt-20">
      {/* B.Tech Section */}
      <div className="flex flex-col justify-center rounded-lg bg-[#F5F5F5] hover:bg-[#E0E0E0] transition-all duration-300 shadow-lg transform hover:scale-105 p-6">
        <img src={btechImage} alt="B.Tech Program" className="mx-auto mb-4 h-32 w-32 object-contain" />
        <h2 className="mx-auto text-4xl font-bold text-[#219C90] mb-4">B.Tech</h2>
        <p className="font-light text-xl text-center mb-4 text-gray-700 leading-7">
          The objective of the B.Tech. program at IIIT-Delhi is to develop students to be well-prepared with the necessary core competencies, problem-solving, and innovation skills needed to succeed in engineering and entrepreneurship careers.
        </p>
        <a href="https://iiitd.ac.in/ia-btech/">
          <button className="mx-auto w-40 px-6 py-3 my-4 bg-[#3FAEA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#359793] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Apply Now
          </button>
        </a>
      </div>

      {/* M.Tech Section */}
      <div className="flex flex-col justify-center rounded-lg bg-[#F5F5F5] hover:bg-[#E0E0E0] transition-all duration-300 shadow-lg transform hover:scale-105 p-6">
        <img src={mtechImage} alt="M.Tech Program" className="mx-auto mb-4 h-32 w-32 object-contain" />
        <h2 className="mx-auto text-4xl font-bold text-[#219C90] mb-4">M.Tech</h2>
        <p className="font-light text-xl text-center mb-4 text-gray-700 leading-7">
          IIIT-Delhi subscribes to the view that a Master's degree is primarily industry-focused, although it can be a stepping stone for research as well.
        </p>
        <a href="https://iiitd.ac.in/ia-mtech/">
          <button className="mx-auto w-40 px-6 py-3 my-4 bg-[#3FAEA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#359793] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Apply Now
          </button>
        </a>
      </div>

      {/* Ph.D. Section */}
      <div className="flex flex-col justify-center rounded-lg bg-[#F5F5F5] hover:bg-[#E0E0E0] transition-all duration-300 shadow-lg transform hover:scale-105 p-6">
        <img src={phdImage} alt="Ph.D. Program" className="mx-auto mb-4 h-32 w-32 object-contain" />
        <h2 className="mx-auto text-4xl font-bold text-[#219C90] mb-4">Ph.D.</h2>
        <p className="font-light text-xl text-center mb-4 text-gray-700 leading-7">
          The Ph.D. program at IIIT-Delhi is focused on research, with limited coursework designed to enhance the breadth and depth of students, followed by focused research.
        </p>
        <a href="https://iiitd.ac.in/admission/phd">
          <button className="mx-auto w-40 px-6 py-3 my-4 bg-[#3FAEA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#359793] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Application;
