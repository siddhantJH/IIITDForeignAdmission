import React, { useState, useEffect, useRef } from "react";

const NewsCarousel = ({ newsItems, interval = 3000, direction = "right" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (isPaused || !isVisible) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, interval, isPaused, isVisible]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="relative w-[90%] max-w-[1300px] h-[650px] mx-auto mt-24 overflow-hidden rounded-3xl shadow-xl bg-transparent text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {newsItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentIndex
              ? "opacity-100 z-10 translate-x-0 rotate-0"
              : "opacity-0 translate-x-10 rotate-12"
          } flex items-center`}
        >
          {/* Left Image Section */}
          <div className="w-[75%] h-full transform transition-transform duration-1000 ease-in-out">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full rounded-l-3xl"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-[45%] h-full p-12 bg-[#172c44] bg-opacity-80 rounded-r-3xl flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center flex-grow text-center">
              <h3 className="text-3xl font-semibold mb-5 text-[#e3e8f3] leading-tight tracking-wide transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#3b8f97]">
                {item.title}
              </h3>
              <p className="text-lg mb-6 text-[#b2c1d6] leading-relaxed transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#3b8f97]">
                {item.description}
              </p>
            </div>

            {/* Centered "Read More" Button */}
            <a
              href="#"
              className="self-center px-8 py-3 font-semibold bg-[#3b8f97] text-[#e3e8f3] rounded-md hover:bg-[#2c7482] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              Read More
            </a>
          </div>
        </div>
      ))}

      {/* Left Arrow Button */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-transparent border-2 border-[#3b8f97] rounded-full shadow-md hover:bg-[#2c7482] hover:text-[#022742] transition-all duration-300 ease-in-out z-20"
      >
        <span className="text-4xl font-extrabold text-[#e3e8f3]">&#10094;</span>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-transparent border-2 border-[#3b8f97] rounded-full shadow-md hover:bg-[#2c7482] hover:text-[#022742] transition-all duration-300 ease-in-out z-20"
      >
        <span className="text-4xl font-extrabold text-[#e3e8f3]">&#10095;</span>
      </button>
    </div>
  );
};

export default NewsCarousel;
