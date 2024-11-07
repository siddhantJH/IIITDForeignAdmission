const CollegePost = ({ image, name, description }) => {
  return (
    <div className="bg-gray-200 text-[#022742] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center mb-4 mx-2">
      <img src={image} alt={`${name} logo`} className="w-32 h-32 object-cover mb-4 rounded-full shadow-md transition-transform duration-300 hover:scale-110" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-md text-center">{description}</p>
    </div>
  );
};

const JointDegreeProgram = () => {
  const colleges = [
    {
      name: "College A",
      description: "College A offers a diverse range of programs and has a strong reputation for academic excellence.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "College B",
      description: "College B is known for its innovative curriculum and research opportunities.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "College C",
      description: "College C provides an enriching experience with its multicultural environment.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    }
  ];

  return (
    <div className="bg-[#1b374d] text-white p-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 transition-transform duration-300 hover:scale-105">
        Joint Degree Programme
      </h1>
      <p className="text-xl font-light text-center mb-8 transition-opacity duration-300 hover:opacity-80">
  Our Joint Degree Programme allows students to earn degrees from multiple institutions, enhancing their academic and professional prospects.
</p>


      <h2 className="text-2xl font-semibold mt-4 underline mb-2">Benefits:</h2>
      <div className="bg-gray-200 text-[#022742] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-8">
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li className="transition-transform duration-300 hover:translate-x-2">Broader educational experience</li>
          <li className="transition-transform duration-300 hover:translate-x-2">Networking opportunities</li>
          <li className="transition-transform duration-300 hover:translate-x-2">Global perspective on education</li>
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

export default JointDegreeProgram;
