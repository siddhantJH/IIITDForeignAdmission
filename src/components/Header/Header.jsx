import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Contact, HomeDropDown, InternationalAdmissionDropdown, ScholarshipDropdown, VisaAndImmigrationDropdown, StudentsDropdown, PartnersDropdown, CampusDropdown } from "./Dropdown";
import Search from "./Search";
import Chatbot from "../ChatBot";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [homeOpen, setHomeOpen] = useState(false);
    const [intOpen, setIntOpen] = useState(false);
    const [schOpen, setSchOpen] = useState(false);
    const [visaOpen, setVisaOpen] = useState(false);
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [campusOpen, setCampusOpen] = useState(false);
    const [studOpen, setStudOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const toggleMenu = () => setShowMenu(!showMenu);
  
    return (
      <>
        <header className="bg-[#022742] fixed z-50 text-xs w-screen py-10 h-20 flex flex-row items-center shadow-xl border-20 justify-between sm:justify-around text-white">
          <button onClick={toggleMenu} className="sm:hidden text-white p-2">
            {showMenu ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
          <img src="https://iiitd.ac.in/sites/default/files/images/logo/style3singlecolorsmall.png" className="absolute h-14 w-17 left-20" alt="" />
          <nav className={`border-cyan-800 text-xs ${showMenu ? 'flex' : 'hidden'} sm:flex flex-col h-[80px] sm:flex-row justify-between py-2 items-center gap-2 font-semibold absolute sm:relative top-14 sm:top-0 left-1 w- sm:w-auto bg-gray-900 sm:bg-transparent`}>
            <NavLink to="/" href="#" onMouseEnter={() => setHomeOpen(false)} onMouseLeave={() => setHomeOpen(false)} className=" text-white py-2 border-cyan-500 font-normal hover-underline-animation relative text-xl z-10 px-2 transition-all duration-300 font-poppins">
              Home
              <HomeDropDown isOpen={homeOpen} />
            </NavLink>
            <a href="#" onMouseEnter={() => setIntOpen(true)} onMouseLeave={() => setIntOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation relative text-xl z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              International Admission
              <InternationalAdmissionDropdown isOpen={intOpen} />
            </a>
            <a href="#" onMouseEnter={() => setSchOpen(true)} onMouseLeave={() => setSchOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation relative text-xl z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              Scholarship
              <ScholarshipDropdown isOpen={schOpen} />
            </a>
            <NavLink to="" href="" onMouseEnter={() => setVisaOpen(true)} onMouseLeave={() => setVisaOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation relative text-xl z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              Visa and Immigration
              <VisaAndImmigrationDropdown isOpen={visaOpen} />
            </NavLink>
            <a href="#" onMouseEnter={() => setStudOpen(true)} onMouseLeave={() => setStudOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation text-xl relative z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              Students
              <StudentsDropdown isOpen={studOpen} />
            </a>
            <a href="#" onMouseEnter={() => setPartnersOpen(true)} onMouseLeave={() => setPartnersOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation text-xl relative z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              Partners
              <PartnersDropdown isOpen={partnersOpen} />
            </a>
            <a href="#" onMouseEnter={() => setCampusOpen(true)} onMouseLeave={() => setCampusOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation  text-xl relative z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              Campus
              <CampusDropdown isOpen={campusOpen} />
            </a>
            <a href="#" onMouseEnter={() => setContactOpen(true)} onMouseLeave={() => setContactOpen(false)} className="text-white py-2 border-cyan-500 font-normal hover-underline-animation  text-xl relative z-10 bg-gray-white px-2 transition-all duration-300 font-poppins">
              Contact Us
              <Contact isOpen={contactOpen} />
            </a>
          </nav>
          <Search />
        </header>
      </>
    );
  }

export default Header;
