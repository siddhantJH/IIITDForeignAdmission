import React, { useState, useEffect } from "react";
import Chatbot from "../components/ChatBot"; // Ensure this path is correct

function VisaAndImmigration() {
  const [FAQ, setFAQ] = useState([]);
  const [FAQtoggle, setFAQtoggle] = useState(-1);
  const [showChatbot, setShowChatbot] = useState(false); // State to toggle chatbot visibility

  useEffect(() => {
    setFAQ([
      {
        qs: "Do I have to leave India when the entry visa in my passport expires?",
        as: "Yes, you must leave or renew your visa before it expires to avoid penalties.",
      },
      {
        qs: "What happens if my entry visa expires while I’m in India?",
        as: "You should contact the local immigration office immediately to regularize your status.",
      },
      {
        qs: "What if I get a new passport, but my entry visa is still valid in my old one?",
        as: "Carry both your old and new passports when traveling.",
      },
      {
        qs: "What if I lose my passport with the valid entry visa?",
        as: "Report the loss to your local authorities and apply for a replacement passport and visa.",
      },
      {
        qs: "I have other questions about my visa.",
        as: "Please consult with the visa office or check the official immigration website for details.",
      },
    ]);
  }, []);

  return (
    <div className="relative p-5 font-sans bg-gray-100">
      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed top-20 right-5 w-80 max-h-96 bg-white rounded-lg shadow-lg overflow-hidden z-50 p-3">
          <button
            className="absolute top-2 right-2 text-lg text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setShowChatbot(false)}
          >
            ✖
          </button>
          <Chatbot />
        </div>
      )}

      {/* Main Content */}
      <div className="mt-16">
        <div className="mb-5 p-5 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          <h1 className="text-xl font-bold border-b-2 border-blue-500 mb-2 text-gray-800">
            Introduction
          </h1>
          <div className="flex justify-between">
            <p className="text-base text-gray-600">
              Sample Data On introduction
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0VLGoGWGCQ5Sl3TdFGza2FuTdrZ8ZhLX6Q&s"
              alt="Intro"
              className="rounded-lg mr-4"
            />
          </div>
        </div>
        <div className="mb-5 p-5 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          <h1 className="text-xl font-bold border-b-2 border-blue-500 mb-2 text-gray-800">
            Types of Visas
          </h1>
          <ul className="list-none space-y-2">
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Type 1
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Type 2
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Type 3
            </li>
          </ul>
        </div>
        <div className="mb-5 p-5 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          <h1 className="text-xl font-bold border-b-2 border-blue-500 mb-2 text-gray-800">
            Application Process
          </h1>
          <p className="text-base text-gray-600 mb-2">
            Following is the process for Visa Application:
          </p>
          <ul className="list-none space-y-2">
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Step 1
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Step 2
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Step 3
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Step 4
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Step 5
            </li>
          </ul>
        </div>
        <div className="mb-5 p-5 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          <h1 className="text-xl font-bold border-b-2 border-blue-500 mb-2 text-gray-800">
            Important Deadlines
          </h1>
          <ul className="list-none space-y-2">
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Deadline 1:
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Deadline 2:
            </li>
            <li className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-300">
              Deadline 3:
            </li>
          </ul>
        </div>
        <div className="mb-5 p-5 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          <h1 className="text-xl font-bold border-b-2 border-blue-500 mb-2 text-gray-800">
            FAQs
          </h1>
          {FAQ.length ? (
            <>
              {FAQ.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    FAQtoggle === index ? setFAQtoggle(-1) : setFAQtoggle(index)
                  }
                  className="cursor-pointer bg-gray-300 rounded-md p-3 mb-2 hover:bg-gray-400 transition duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">{item.qs}</span>
                    <span className="text-gray-600">
                      {FAQtoggle === index ? "-" : "+"}
                    </span>
                  </div>
                  {FAQtoggle === index && (
                    <p className="mt-2 bg-gray-200 p-3 rounded-md text-gray-700">
                      {item.as}
                    </p>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>NO FAQS</>
          )}
        </div>
      </div>

      {/* Floating Bubble Button */}
      <button
        className="fixed top-5 right-5 bg-blue-600 text-white rounded-full px-5 py-3 shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none"
        onClick={() => setShowChatbot(!showChatbot)}
      >
        Ask me anything!
      </button>
    </div>
  );
}

export default VisaAndImmigration;
