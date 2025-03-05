import React from "react";

const Footer = ({ bgColor, bgLightColor, flowerImage }) => {
  return (
    <div className="w-full" style={{ backgroundColor: bgLightColor }}>
      {/* Top Flower Border */}
      
      {flowerImage && (
        <div
          className="w-full h-8 mb-4"
          style={{
            backgroundImage: `url(${flowerImage})`,
            backgroundPosition: "top",
          }}
        ></div>
      )}


      {/* Main Footer Content */}
      <div
        className="w-full md:py-6 py-0 flex flex-col items-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full flex justify-around text-white font-bold text-lg flex-col md:flex-row">
          <div className="flex justify-center gap-8 md:gap-0 my-4 md:mt-0 w-full md:w-2/5 md:justify-around">
            <div className="text-center">
              <p className="md:text-2xl text-xl font-normal font-impact">
                ARPAN KUSUM
              </p>
              <p className="text-xs font-normal font-poppins">
                STUDENT COORDINATOR
              </p>
              <a
                href="tel:9472435923"
                className="text-xs font-normal font-poppins hover:underline"
              >
                94724 35923
              </a>
            </div>
            <div className="text-center">
              <p className="md:text-2xl text-xl  font-normal font-impact">
                KISHLAY RAJ
              </p>
              <p className="text-xs font-normal font-poppins">
                STUDENT COORDINATOR
              </p>
              <a
                href="tel:6376287047"
                className="text-xs font-normal font-poppins hover:underline"
              >63762 87047</a>
            </div>
          </div>
          <div className="text-center">
            <button className="border-2 border-white text-white px-6 py-4 md:text-2xl text-xl rounded-full  font-normal font-impact">
              CONTACT US
            </button>
          </div>
          <div className="flex justify-center gap-8 md:gap-0 my-4 md:mt-0 w-full md:w-2/5 md:justify-around">
            <div className="text-center">
              <p className="md:text-2xl text-xl font-normal font-impact">
                FARHAN ALI
              </p>
              <p className="text-xs font-normal font-poppins">
                STUDENT COORDINATOR
              </p>
              <a
                href="tel:9155922000"
                className="text-xs font-normal font-poppins hover:underline"
              >91559 22000</a>
            </div>
            <div className="text-center">
              <p className="md:text-2xl text-xl font-normal font-impact">
                ADITYA MUDGAL
              </p>
              <p className="text-xs font-normal font-poppins">
                STUDENT COORDINATOR
              </p>
              <a
                href="tel:7017954096"
                className="text-xs font-normal font-poppins hover:underline"
              >70179 54096</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Flower Border */}
      {flowerImage && (
        <div
          className="w-full h-8 mt-2"
          style={{
            backgroundImage: `url(${flowerImage})`,
            backgroundPosition: "top",
          }}
        ></div>
      )}
    </div>
  );
};

export default Footer;
