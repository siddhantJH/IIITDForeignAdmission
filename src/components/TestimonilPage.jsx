import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonialsData = [
  {
    name: "Jane Doe",
    photo: "/path/to/jane-doe.jpg",
    course: "Computer Science",
    country: "Brazil",
    testimonial: "Studying here has been an incredible experience. The faculty is amazing and the campus is very welcoming to international students."
  },
  {
    name: "John Smith",
    photo: "/path/to/john-smith.jpg",
    course: "Business Administration",
    country: "India",
    testimonial: "I have made lifelong friends and learned so much during my time here. The support for international students is top-notch."
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#022742] via-[#034f84] to-[#011f4b] pt-24 pb-16"> {/* Adjusted padding on top */}
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          What Our Students Say
        </h1>
        <div className="flex flex-wrap justify-center">
          {testimonialsData.map((student, index) => (
            <TestimonialCard key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
