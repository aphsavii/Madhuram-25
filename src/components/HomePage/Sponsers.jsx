import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import rightFlower from "/assets/image91.png";
import leftFlower from "/assets/image75.png";
import Madhuram from "/assets/image 247.png";
import Comestify from "/assets/Cosmetify.png";
import Servocare from "/assets/servocare.png";
import Internwell from "/assets/internwell.png";
import Himalaya from "/assets/himalaya.png";
import Lakme from "/assets/lakme.png";
import RedBull from "/assets/redbull.png";
import BeyondSnack from "/assets/beyondSnack.png";
import CBI from "/assets/cbi.png";
import Oppo from "/assets/oppo.png";
import Coke from "/assets/coke.png";
import SAA from "/assets/saa.png";
import Dominos from "/assets/dominos.jpg";
import HDFC from "/assets/Hdfc.png";
import Bragfit from "/assets/bragfit.png";
import IOL from "/assets/IOL.png";
import BB from "/assets/image 87.png";
import Garnier from "/assets/Garnier.png";

const Sponsors = () => {
  const sponsors = [
    { name: "Comestify", logo: Comestify},
    { name: "Servocare", logo: Servocare},
    { name: "Internwell", logo: Internwell },
    { name: "Himalaya", logo: Himalaya },
    { name: "Lakme", logo: Lakme },
    { name: "RedBull", logo: RedBull },
    { name: "BeyondSnack", logo: BeyondSnack},
    { name: "CBI", logo: CBI},
    { name: "Oppo", logo: Oppo },
    { name: "Coke", logo: Coke },
    { name: "SAA", logo: SAA },
    { name: "Dominos", logo: Dominos },
    { name: "HDFC", logo: HDFC},
    { name: "Bragfit", logo: Bragfit},
    { name: "IOL", logo: IOL },
    { name: "BB", logo: BB },
    { name: "Garnier", logo: Garnier },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sponsors.length]);

  const getCircularSponsors = () => {
    const numSponsors = isMobile ? 1 : 3;
    return Array.from(
      { length: numSponsors },
      (_, i) => sponsors[(currentIndex + i) % sponsors.length]
    );
  };

  return (
    <>
      <section className="md:py-8 py-0 mt-24 text-center relative">
        <div className="relative flex items-center justify-center">
          <img
            src={leftFlower}
            alt="left flower"
            className="absolute left-0 md:w-auto w-2/5"
          />

          <div className="px-12 py-4 rounded-lg relative z-10">
            <h2 className="md:text-7xl text-3xl font-extrabold text-white drop-shadow-lg uppercase font-climate">
              Our Past Sponsors
            </h2>
          </div>

          <img
            src={rightFlower}
            alt="right flower"
            className="absolute right-0 md:w-auto w-2/5"
          />
        </div>

        {/* Carousel */}
        <div className="md:mt-60 mt-16 flex items-center justify-center relative">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - 1 + sponsors.length) % sponsors.length
              )
            }
            className="absolute left-0 md:p-2 p-1 rounded-full z-10 border-4 cursor-pointer md:ml-7 ml-1"
          >
            <FaChevronLeft size={30} />
          </button>

          <div className="flex gap-16 overflow-hidden">
            {getCircularSponsors().map((sponsor, index) => (
              <div
                key={index}
                className="md:w-80 md:h-80 w-60 h-60 bg-gray-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="object-cover rounded-full"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
            }
            className="absolute right-0 md:p-2 p-1 rounded-full z-10 border-4 cursor-pointer md:mr-7 mr-1"
          >
            <FaChevronRight size={30} />
          </button>
        </div>

        {/* Pagination Dots (Visible on Mobile) */}
        {isMobile && (
          <div className="flex justify-center mt-4">
            {sponsors.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        )}

        {/* Sponsor Description */}
        <div className="md:mt-24 mt-12 px-5 lg:px-20 lg:leading-[55px]  text-white md:text-5xl text-2xl font-poppins">
        We sincerely thank our Sponsors for their invaluable support in making Madhuram a grand success every year!        </div>
      </section>

      {/* Footer Section */}
      <section className="border-white md:border-[5px] border-[3px] bg-[#1F3765] flex flex-row justify-between md:px-10 px-2 md:py-12 py-6 md:mt-24 mt-12 md:mb-4 mb-2 items-start">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={Madhuram}
            alt="Madhuram"
            className="h-60 w-60 md:h-72 md:w-72 object-contain"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-row justify-around w-full md:w-2/3 text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl md:text-4xl font-semibold text-white font-poppins">
              Quick Links
            </h2>
            <ul className="mt-4 text-white space-y-2 md:text-md text-sm">
              <li>
                <a href="" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="events" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="about" className="hover:underline">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-4xl font-semibold text-white font-poppins">
              Important Links
            </h2>
            <ul className="mt-4 text-white space-y-2 md:text-md text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
