import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Madhuram from "/assets/image64.png";
import SlietLogo from "/assets/slietLogo.png";

const Navbar = ({ bgColor }) => {
  return (
    <nav
      style={{ backgroundColor: bgColor }}
      className="w-full py-4 px-1 lg:px-8 flex items-center justify-between"
    >
      {/* Left Logo */}
      <div className="hidden lg:block">
        <img src={SlietLogo} alt="Left Logo" className="w-36 h-auto" />
      </div>      

      {/* Navigation Links */}
      <ul className="flex mx-auto lg:mx-0 lg:space-x-8 px-5  py-5 lg:py-8 lg:px-12 rounded-full border-[#FDC80E80] border-2 md:gap-12 gap-5 lg:gap-8">
        {[
          { name: "Home", path: "/" }, // "/" maps to HomePage
          { name: "About Us", path: "/about" }, // "/about" maps to About
          { name: "Team", path: "/team" },
          { name: "Events", path: "/events" },
          { name: "Register", path: "/register" },
        ].map((item) => (
          <li key={item.name} className="text-white font-normal text-base md:text-2xl cursor-pointer uppercase font-impact">
            <Link to={item.path} className="hover:text-yellow-400 transition-colors">{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right Logo */}
      <div className="hidden lg:block">
        <img src={Madhuram} alt="Right Logo" className="w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
