import React, { useEffect, useState, useRef } from "react";

const FloatingDivsPage = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls visibility when scrolled to
  const [showSecond, setShowSecond] = useState(false); // Controls which content-description pair to display
  const containerRef = useRef(null);

  // Intersection Observer to detect when the div is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Show content when scrolled into view
          setTimeout(() => setShowSecond(true), 3000); // Show second pair after 3 seconds
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gray-100 flex flex-col items-center"
    >
      {/* Conditionally Rendered Content - only visible when scrolled into view */}
      {isVisible && (
        <div className="flex w-full max-w items-center space-x-6 overflow-hidden">
          {!showSecond ? (
            // First Floating Div (Main Content 1 & Description 1)
            <>
              <div className="w-1/2 transform -translate-x-full animate-slide-in-left-first bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Main Content 1</h2>
                <p>This is the main content that slides in from the left.</p>
              </div>
              <div className="w-1/2 transform translate-x-full animate-slide-in-right-first bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-blue-600">Description 1</h2>
                <p>This is the description that slides in from the right.</p>
              </div>
            </>
          ) : (
            // Second Floating Div (Main Content 2 & Description 2)
            <>
              <div className="w-1/2 transform -translate-x-full animate-slide-in-left-second bg-green-500 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Main Content 2</h2>
                <p>This is the second main content that slides in from the left.</p>
              </div>
              <div className="w-1/2 transform translate-x-full animate-slide-in-right-second bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-green-600">Description 2</h2>
                <p>This is the second description that slides in from the right.</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingDivsPage;
