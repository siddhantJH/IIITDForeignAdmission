// src/components/FloatingButton.js

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Chatbot from './ChatBot'; // Adjust the path as necessary

const FloatingButton = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 100 }); // Set initial y position to 100 for a lower position

  const handleDrag = (e, ui) => {
    setPosition({
      x: ui.x,
      y: ui.y,
    });
  };

  return (
    <div>
      {/* Draggable Floating Robot Button */}
      <Draggable
        position={position}
        onStop={handleDrag} // Use onStop to update position on drag end
      >
        <div
          className="fixed cursor-pointer z-50"
          style={{ top: position.y, left: position.x }}
        >
          <div className="relative group">
            <button
              className="bg-blue-500 bg-opacity-75 text-white rounded-full p-5 shadow-xl hover:bg-blue-600 hover:bg-opacity-100 transition duration-300 focus:outline-none flex items-center justify-center"
              onClick={() => setShowChatbot(!showChatbot)}
            >
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJsMGJmdW9xd25zY3Y1bXUxdTF4bnRnM2pwMzZuamtudTYwMWgxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S60CrN9iMxFlyp7uM8/giphy.webp"
                alt="Robot"
                className="w-24 h-24 rounded-full"
              />
            </button>

            {/* Cloud-like pop-up */}
            <div
              className="absolute -top-12 left-full transform -translate-x-2/3 bg-white text-gray-700 rounded-lg shadow-md px-6 py-3 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ width: '220px', textAlign: 'center', cursor: 'pointer', marginLeft: '20px', fontFamily: 'Cursive' }}
            >
              <span>Click to TALK to Assistant</span>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </div>
          </div>
        </div>
      </Draggable>

      {/* Chatbot Modal with Smooth Transition */}
      <div
        className={`absolute bg-white rounded-lg shadow-lg overflow-hidden z-50 p-3 transition-all duration-500 ease-in-out transform ${
          showChatbot ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          top: position.y + 120, // Adjusted to be slightly below the button
          left: position.x,
          width: '500px', // Increased width
          Height: '800px', // Increased maxHeight
          visibility: showChatbot ? 'visible' : 'hidden', // Control visibility to prevent interaction when hidden
        }}
      >
        <button
          className="absolute top-2 right-2 text-lg text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setShowChatbot(false)}
        >
          ✖
        </button>
        <Chatbot />
      </div>
    </div>
  );
};

export default FloatingButton;
