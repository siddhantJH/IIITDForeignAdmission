import React, { useState, useEffect } from 'react';
import './NewsTicker.css';

const NewsTicker = ({ newsItems, scrollSpeed = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, scrollSpeed);
    return () => clearInterval(interval);
  }, [newsItems.length, scrollSpeed]);

  return (
    <div className="news-ticker-container">
      <div className="news-ticker">
        <span className="news-ticker-text">
          <i className="fas fa-bullhorn"></i> {/* Optional icon */}
          {newsItems[currentIndex].title}
        </span>
      </div>
    </div>
  );
};

export default NewsTicker;
