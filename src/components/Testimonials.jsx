import React, { useState, useEffect } from "react";
import TestimonialList from "./TestimonialList";
import './TestimonialStyle.css';

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((current + 1) % TestimonialList.length);
        setAnimating(false);
      }, 500); // Match the CSS transition duration
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div className="h-[40rem] w-screen grid grid-cols-1">
        <div className="bg-[#F5F5F5] overflow-hidden">
          <div>
            <h2 className="text-bold font-bold content text-[40px] py-6 text-5xl font-roboto text-[#219C90]">
              Hear from Our Past Students
            </h2>
          </div>
          <div className="w-[50%] mx-auto my-8 relative">
            <div className={`testimonial-slide ${animating ? 'slide-enter' : ''}`}>
              <img
                src={TestimonialList[current].Image}
                className="hover-button h-[15rem] w-[15rem] rounded-[100px] mx-auto text-xl"
                alt=""
              />
              <h5 className="py-2">{TestimonialList[current].name}</h5>
              <p>{TestimonialList[current]["job-description"]}</p>
              <h4 className="playwrite-ng-modern text-3xl py-5 text-[#219C90]">
                {TestimonialList[current].review}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
