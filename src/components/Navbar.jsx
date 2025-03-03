import React from "react";
import Madhuram from "/assets/image64.png";

const Navbar = ({ bgColor }) => {
  return (
    <nav style={{ backgroundColor: bgColor }} className="w-full py-4 px-8 flex items-center justify-between"> 
      {/* Left Logo */}
      <div>
        <img src={Madhuram} alt="Left Logo" className="w-full" />
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-8 py-8 px-12 rounded-full border-[#FDC80E80] border-2 gap-12">
        {[
          "Home",
          "About Us",
          "Team",
          "Events",
          "Register"
        ].map((item) => (
          <li
            key={item}
            className="text-white font-normal text-2xl cursor-pointer uppercase font-impact"
          >
            {item}
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
