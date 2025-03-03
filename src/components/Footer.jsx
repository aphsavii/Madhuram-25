import React from "react";

const Footer = ({ bgColor, bgLightColor, flowerImage }) => {
  return (
    <div className="w-full" style={{ backgroundColor: bgLightColor }}>
      {/* Top Flower Border */}
      <div
        className="w-full h-6 mb-6"
        style={{
          backgroundImage: `url(${flowerImage})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "top",
        }}
      ></div>

      {/* Main Footer Content */}
      <div
        className="w-full py-6 flex flex-col items-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full flex justify-around text-white font-bold text-lg">
          <div className="text-center">
            <p className="text-2xl font-normal font-impact">ARPAN KUSUM</p>
            <p className="text-xs font-normal font-poppins">STUDENT COORDINATOR</p>
            <p className="text-xs font-normal font-poppins">94724 35923</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-normal font-impact">KISHLAY RAJ</p>
            <p className="text-xs font-normal font-poppins">STUDENT COORDINATOR</p>
            <p className="text-xs font-normal font-poppins">63762 87047</p>
          </div>
          <div className="text-center">
            <button className="border-2 border-white text-white px-6 py-4 text-2xl rounded-full  font-normal font-impact">
              CONTACT US
            </button>
          </div>
          <div className="text-center">
            <p className="text-2xl font-normal font-impact">FARHAN ALI</p>
            <p className="text-xs font-normal font-poppins">STUDENT COORDINATOR</p>
            <p className="text-xs font-normal font-poppins">91559 22000</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-normal font-impact">ADITYA MUDGAL</p>
            <p className="text-xs font-normal font-poppins">STUDENT COORDINATOR</p>
            <p className="text-xs font-normal font-poppins">70179 54906</p>
          </div>
        </div>
      </div>

      {/* Bottom Flower Border */}
      <div
        className="w-full h-6 mt-6"
        style={{
          backgroundImage: `url(${flowerImage})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom",
        }}
      ></div>
    </div>
  );
};

export default Footer;
