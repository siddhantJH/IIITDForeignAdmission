import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export const HomeDropDown = ({ isOpen }) => {
  return (
    isOpen && (
      <div
        className="origin-top-right absolute right-0  mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
            
          <a
            href="#"
            className="block px-4 py-2 font-thin text-sm text-gray-700 hover:bg-gray-100 hover:text-cyan-400"
            role="menuitem"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 3
          </a>
        </div>
      </div>
    )
  );
};



export const InternationalAdmissionDropdown = ({ isOpen }) => {
  return (
    isOpen && (
      <div
        // Adjust the top-7 to adjust the dropdown vertically
        className="origin-top-left top-7 absolute font-normal text-sm mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full  w-48 left-1/2 transform -translate-x-1/2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-2" role="none">
          <NavLink to="/application-process" className="block w-full">
            <a
              className="block px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600 w-full"
              role="menuitem"
            >
              Application Process
            </a>
          </NavLink>

          <NavLink to="https://www.iiitd.ac.in/sites/default/files/docs/about/2024/IIIT-Delhi%20Brochure-%20Dec%202023-2-65.pdf" className="block w-full">
            <a
              className="block px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600 w-full"
              role="menuitem"
            >
              Download Information Brochure
            </a>
          </NavLink>

          <NavLink to="/FAQs" className="block w-full">
            <a
              className="block px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600 w-full"
              role="menuitem"
            >
              FAQs
            </a>
          </NavLink>
        </div>
      </div>
    )
  );
};

  //for future need 
  export const ScholarshipDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-left text-sm absolute font-normal right-0 mt-2 w-30 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-48 left-1/2 transform -translate-x-1/2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="https://iiitd.ac.in/admission/scholarships"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 text-sm hover-dropdown text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
              role="menuitem"
            >
              Apply
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 text-sm hover-dropdown text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
              role="menuitem"
            >
              Check Eligibility
            </a>
          </div>
        </div>
      )
    );
  };

  export const VisaAndImmigrationDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-left text-sm absolute font-normal mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-48 left-1/2 transform -translate-x-1/2 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
          <a
           href="https://studee.com/guides/how-to-apply-for-an-india-student-visa"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 text-sm hover-dropdown text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
            role="menuitem"
             onClick={() => console.log('Link clicked!')}
            >
            How to Apply
            </a>

            <a
              href="https://studyinindia.gov.in/onboarding-frro-of-international-students-"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 text-sm hover-dropdown text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
              role="menuitem"
            >
              Eligibility
            </a>
            <a
              href="https://www.mha.gov.in/sites/default/files/2022-07/student_visa_faq.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 text-sm hover-dropdown text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
              role="menuitem"
            >
              FAQ
            </a>
          </div>
        </div>
      )
    );
  };
  export const  StudentsDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-left text-sm absolute font-normal mt-2 w-40  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  w-48 left-1/2 transform -translate-x-1/2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/testimony">
            <a
              href="#"
              className="block w-full px-4 py-2 hover-dropdown text-sm font-thin text-thin text-gray-700  hover:bg-gray-100 hover:text-cyan-600  border-cyan-600" 
              role="menuitem"
            >
              International Student Testimony
            </a>
            </NavLink>
            <NavLink to="student-support">
            <a
              href="#"
              className="block w-full px-4 py-2 font-thin hover-dropdown text-sm text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-cyan-600"
              role="menuitem"
            >
              Internation Student Support
            </a>

            </NavLink>
           
          </div>
        </div>
      )
    );
  };

  export const PartnersDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-left text-sm absolute font-normal mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-48 left-1/2 transform -translate-x-1/2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/PartnerInstitutes">
              <a
                className="block w-full px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
                role="menuitem"
              >
                Partner Institutes
              </a>
            </NavLink>
            <NavLink to="/joint-program">
              <a
                className="block w-full px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
                role="menuitem"
              >
                Joint Degree Program
              </a>
            </NavLink>
  
            <NavLink to="/summer-exchange">
              <a
                className="block w-full px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
                role="menuitem"
              >
                Summer Exchange
              </a>
            </NavLink>
  
            <NavLink to="/campus-program">
              <a
                className="block w-full px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-cyan-600"
                role="menuitem"
              >
                Other Campus Progam
              </a>
            </NavLink>
  
            <NavLink to="/faculty-development">
              <a
                className="block w-full px-4 py-2 hover-dropdown text-sm font-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600"
                role="menuitem"
              >
                Faculty Development Program
              </a>
            </NavLink>
          </div>
        </div>
      )
    );
  };

  export const  CampusDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute text-sm mt-2 w-40 font-thin shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  w-48 left-1/2 transform -translate-x-1/2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/Campusfacilities">
            <a
              href="#"
              className="block w-full px-4 py-2 font-thin text-sm hover-dropdown text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-cyan-600"
              role="menuitem"
            >
             Campus Facilities</a>
            </NavLink>
          </div>
        </div>
      )
    );
  };


  export const  Contact = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="block w-full origin-top-right absolute right-0 text-sm mt-2 w-40 font-thin shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  w-48 left-1/2 transform -translate-x-1/2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/chatbot">
            <a
              href="#"
              className="block w-full px-4 py-2 font-thin hover-dropdown  text-sm text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-cyan-600"
              role="menuitem"
            >
             Talk to Assistant
             </a>
            </NavLink>
            <NavLink to="/Contact-Us">
            <a
              href="#"
              className="block w-full px-4 py-2 font-thin hover-dropdown  text-sm text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-cyan-600"
              role="menuitem"
            >
              Contact Us
            </a>
            </NavLink>
          </div>
        </div>
      )
    );
  };
export default {Contact,HomeDropDown,InternationalAdmissionDropdown,ScholarshipDropdown,VisaAndImmigrationDropdown,StudentsDropdown,PartnersDropdown,CampusDropdown}