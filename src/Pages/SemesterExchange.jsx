const CollegePost = ({ image, name, description }) => {
  return (
    <div className="bg-gray-200 text-[#022742] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center mb-4 mx-2">
      <img src={image} alt={`${name} logo`} className="w-32 h-32 object-cover mb-4 rounded-full shadow-md transition-transform duration-300 hover:scale-110" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-md text-center">{description}</p>
    </div>
  );
};

const SummerExchangeProgram = () => {
  const colleges = [
    {
      name: "College D",
      description: "College D offers unique summer programs that immerse students in a rich cultural experience.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "College E",
      description: "College E is renowned for its innovative approach to summer learning and development.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "College F",
      description: "College F provides exciting summer courses that foster academic and personal growth.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
  ];

  return (
    <div className="bg-[#1b374d] text-white p-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 transition-transform duration-300 hover:scale-105">
        Summer Exchange Programme
      </h1>
      <p className="text-xl font-light text-center mb-8 transition-opacity duration-300 hover:opacity-80">
        Our Summer Exchange Programme allows students to explore new cultures and educational experiences abroad.
      </p>

      <h2 className="text-2xl font-semibold mt-4 underline mb-2">Benefits:</h2>
      <div className="bg-gray-200 text-[#022742] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-8">
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li className="transition-transform duration-300 hover:translate-x-2">Cultural immersion and understanding</li>
          <li className="transition-transform duration-300 hover:translate-x-2">Academic enhancement through international exposure</li>
          <li className="transition-transform duration-300 hover:translate-x-2">Building lifelong connections</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 underline mb-2">Participating Colleges:</h2>
      <div className="flex flex-wrap justify-center">
        {colleges.map((college, index) => (
          <CollegePost
            key={index}
            image={college.image}
            name={college.name}
            description={college.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SummerExchangeProgram;
