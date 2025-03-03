import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import rightFlower from "/assets/image91.png";
import leftFlower from "/assets/image75.png";
import Madhuram from "/assets/image 247.png"

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "sponsor1.jpg" },
    { name: "Sponsor 2", logo: "sponsor2.jpg" },
    { name: "Sponsor 3", logo: "sponsor3.jpg" },
    { name: "Sponsor 4", logo: "sponsor4.jpg" },
    { name: "Sponsor 5", logo: "sponsor5.jpg" },
    { name: "Sponsor 6", logo: "sponsor6.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length);
  };

  const getCircularSponsors = () => {
    return [
      sponsors[(currentIndex) % sponsors.length],
      sponsors[(currentIndex + 1) % sponsors.length],
      sponsors[(currentIndex + 2) % sponsors.length],
    ];
  };

  return (
    <>
    <section className="py-8 mt-24 text-center relative">
      <div className="relative flex items-center justify-center">
        <img src={leftFlower} alt="left flower" className="absolute left-0" />

        <div className="px-12 py-4 rounded-lg relative z-10">
          <h2 className="text-7xl font-extrabold text-white drop-shadow-lg uppercase font-climate">
            Our Past Sponsors
          </h2>
        </div>

        <img src={rightFlower} alt="right flower" className="absolute right-0" />
      </div>

      <div className="mt-60 flex items-center justify-center relative">
        {/* Left Navigation Button */}
        <button 
          onClick={prevSlide} 
          className="absolute left-0 p-2 rounded-full z-10 border-4 cursor-pointer ml-7"
        >
          <FaChevronLeft size={30} />
        </button>

        {/* Sponsor Carousel (Circular Display of 3 Images) */}
        <div className="flex gap-16 overflow-hidden">
          {getCircularSponsors().map((sponsor, index) => (
            <div key={index} className="w-80 h-80 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button 
          onClick={nextSlide} 
          className="absolute right-0 p-2 rounded-full z-10 border-4 cursor-pointer mr-7"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* Sponsor Description */}
      <p className="mt-24 text-white text-7xl font-poppins">Few lines for sponsors</p>
    </section>


    <section className="border-white border-[5px] bg-[#1F3765] flex flex-col md:flex-row justify-between  px-10 py-12 mt-24 mb-4 items-start">
  {/* Left Image */}
  <div className="flex justify-center">
    <img src={Madhuram} alt="Madhuram" className="h-60 w-60 md:h-72 md:w-72 object-contain" />
  </div>

  {/* Links Section */}
  <div className="flex flex-col md:flex-row justify-around w-full md:w-2/3 text-center md:text-left">
    <div className="mb-6 md:mb-0">
      <h2 className="text-4xl md:text-4xl font-semibold text-white font-poppins">Quick Links</h2>
      <ul className="mt-4 text-white space-y-2 text-md">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Events</a></li>
        <li><a href="#" className="hover:underline">Gallery</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-4xl md:text-4xl font-semibold text-white font-poppins">Important Links</h2>
      <ul className="mt-4 text-white space-y-2 text-md">
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>
  </div>
</section>

    </>
  );
};

export default Sponsors;