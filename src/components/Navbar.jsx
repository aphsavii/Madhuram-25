import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Madhuram from "/assets/image64.png";
import SlietLogo from "/assets/slietLogo.png";

const Navbar = ({ bgColor }) => {
  return (
    <nav
      style={{ backgroundColor: bgColor }}
      className="w-full py-4 px-8 flex items-center justify-between"
    >
      {/* Left Logo */}
      <div>
        <img src={SlietLogo} alt="Left Logo" className="w-36 h-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 py-8 px-12 rounded-full border-[#FDC80E80] border-2 gap-12">
        {[
          { name: "Home", path: "/" }, // "/" maps to HomePage
          { name: "About Us", path: "/about" }, // "/about" maps to About
          { name: "Team", path: "/team" },
          { name: "Events", path: "/events" },
          { name: "Register", path: "/register" },
        ].map((item) => (
          <li key={item.name} className="text-white font-normal text-2xl cursor-pointer uppercase font-impact">
            <Link to={item.path} className="hover:text-yellow-400 transition-colors">{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right Logo */}
      <div>
        <img src={Madhuram} alt="Right Logo" className="w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
