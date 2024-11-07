import React from 'react';

const TestimonialCard = ({ student }) => {
  return (
    <div className="bg-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-lg p-6 max-w-sm mx-4 mb-8 animate-fadeIn">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4">
          <img
            src={student.photo}
            alt={`${student.name}'s photo`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{student.name}</h3>
        <h4 className="text-lg text-regal-blue mb-4">{student.course}, {student.country}</h4>
        <p className="text-gray-600 text-center leading-relaxed">{student.testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
