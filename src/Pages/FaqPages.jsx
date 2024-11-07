import React, { useState, useRef, useEffect } from 'react';
import Chatbot from '../components/ChatBot'; // Ensure the file path is correct

const faqs = [
  {
    question: "How was IIITD created, and what is its current status?",
    answer: "IIITD was established by the Government of Delhi in 2008 as a state university with an emphasis on research and innovation in information technology. It has quickly grown to be one of India's top technology institutes.",
  },
  {
    question: "Is IIITD affiliated with any other universities such as GGSIPU/DU/NSIT?",
    answer: "IIITD is an autonomous institute and does not have an affiliation with GGSIPU, DU, or NSIT. It functions independently with its own governance structure.",
  },
  {
    question: "What is the relationship between the different IIITs in India?",
    answer: "The Indian Institutes of Information Technology (IIITs) are a group of autonomous institutes, each governed independently, focusing on information technology. IIITD is part of this group but operates independently.",
  },
  {
    question: "Is IIITD a government institute or private? Is it recognized by AICTE or UGC?",
    answer: "IIITD is a government institute funded by the Government of Delhi and recognized by the University Grants Commission (UGC). It is not directly recognized by AICTE since UGC recognition suffices for universities.",
  },
  {
    question: "Is IIITD a research-focused or teaching-focused institute?",
    answer: "IIITD is renowned for its strong emphasis on both research and teaching. The institute encourages students to participate in innovative research projects alongside their academic coursework.",
  },
  {
    question: "What education programs does IIITD offer for international students?",
    answer: "IIITD offers a range of programs for international students, including B.Tech (Bachelor of Technology), M.Tech (Master of Technology), and Ph.D. programs in various fields of computer science and engineering.",
  },
  {
    question: "When should international students apply for admission?",
    answer: "Applications for international admissions typically open in March. It is recommended to check the IIITD official website for exact dates and application procedures.",
  },
  {
    question: "How are students evaluated during a program at IIITD?",
    answer: "Students are evaluated through a combination of exams, assignments, projects, and participation in research activities. The evaluation is comprehensive and aims to assess both theoretical understanding and practical application.",
  },
  {
    question: "What is the typical academic load during a semester at IIITD?",
    answer: "The academic load includes a mix of coursework, laboratory sessions, and project work. Students typically take 4-5 courses per semester, each involving lectures, tutorials, and assessments.",
  },
  {
    question: "What support services are available for international students at IIITD?",
    answer: "IIITD provides various support services, including an International Student Office, language support, cultural orientation sessions, and assistance with housing and visa issues.",
  },
  {
    question: "What are the living arrangements for international students?",
    answer: "IIITD offers on-campus housing options for international students, ensuring a comfortable and convenient living environment with amenities like Wi-Fi, dining facilities, and recreation areas.",
  },
  {
    question: "Are there opportunities for international students to engage in campus life?",
    answer: "Yes, international students can participate in numerous clubs, cultural events, and student organizations, providing opportunities for engagement and integration into campus life.",
  },
];

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 h-screen bg-gray-100">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row gap-10 mx-auto h-full p-6">
        {/* FAQ Section */}
        <div className="md:w-1/2 flex flex-col bg-white shadow-lg rounded-lg p-6 overflow-y-auto border border-gray-200" style={{ maxHeight: '75vh' }}>
          <h1 className="text-4xl font-extrabold mb-6 text-blue-700">Frequently Asked Questions</h1>
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isExpanded={expandedIndex === index}
                toggleExpand={() => toggleExpand(index)}
              />
            ))}
          </ul>
        </div>

        {/* Chatbot Section */}
        <div className="md:w-1/2 flex flex-col bg-white shadow-lg rounded-lg p-6 overflow-y-auto border border-gray-200" style={{ maxHeight: '75vh' }}>
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ faq, isExpanded, toggleExpand }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isExpanded]);

  return (
    <li className="p-4 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-lg border border-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpand}
      >
        <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
        <span className="text-gray-500 text-xl">
          {isExpanded ? '-' : '+'}
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="text-gray-700 mt-2">{faq.answer}</p>
      </div>
    </li>
  );
};

export default FaqPage;
