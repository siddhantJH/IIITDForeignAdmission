const CollegePost = ({ image, name, description }) => {
  return (
    <div className="bg-gray-200 text-[#022742] rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center mb-4 mx-2">
      <img src={image} alt={`${name} logo`} className="w-32 h-32 object-cover mb-4 rounded-full shadow-md transition-transform duration-300 hover:scale-110" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-md text-center">{description}</p>
    </div>
  );
};


const CampusEvents = () => {
  const events = [
    {
      name: "Winter Programme",
      description: "Join our Winter Programme for intensive workshops and networking opportunities.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "Summer Programme",
      description: "Participate in our Summer Programme focused on hands-on projects and research.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "AI Lab Events",
      description: "Explore cutting-edge AI research and participate in collaborative projects.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "Robotics Lab Workshops",
      description: "Engage in hands-on robotics workshops that enhance your technical skills.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "Environmental Science Initiatives",
      description: "Join our initiatives to promote sustainability and environmental awareness.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
  ];

  return (
    <div className="bg-[#1b374d] text-white p-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 transition-transform duration-300 hover:scale-105">
        Campus Events and Programs
      </h1>
      <p className="text-xl font-light text-center mb-8 transition-opacity duration-300 hover:opacity-80">
        Discover various programs and events happening across our campus that enhance your academic journey and personal growth.
      </p>

      <h2 className="text-2xl font-semibold mt-4 underline mb-2">Featured Events:</h2>
      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <CollegePost
            key={index}
            image={event.image}
            name={event.name}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusEvents;
