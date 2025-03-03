import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import group1 from "/assets/About/group1.png";
import pic1 from "/assets/About/pic1.png";
import group from "/assets/About/group.png";
import design3 from "/assets/About/design3.png";
import rightarrow from "/assets/About/rightarrow.png";
import leftarrow from "/assets/About/leftarrow.png";
import groupbottom from "/assets/About/groupbottom.png";
import group2 from "/assets/About/group2.png";
import gpic1 from "/assets/About/gpic1.jpg";
import gpic2 from "/assets/About/gpic2.png";
import gpic3 from "/assets/About/gpic3.jpg";
import { transform } from "motion";

function About() {
  const images = [gpic2, gpic2, gpic2, gpic3, gpic3, gpic1, gpic1, gpic1];   // images should be multiple of 3
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosToShow, setPhotosToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setPhotosToShow(3);
      } else {
        setPhotosToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > images.length - photosToShow ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? images.length - photosToShow : newIndex;
    });
  };


  return (
    <div className="w-full bg-[#FF0A5B] flex items-center justify-center flex-wrap">
      <div className="container mx-auto">
      <div className="">
          <Navbar />
        </div>
      <img className="w-full h-[110px] sm:h-[161px]" src={group1} alt="group1" />

        <img className="w-[350px] h-[120px] mt-[80px] sm:ml-[89px]" src={pic1} alt="pic1" />

        <div className="flex flex-row items-start justify-between flex-wrap w-full py-[30px] sm:flex-nowrap">
          <p className="flex items-center text-[#FFF] text-4xl font-poppins w-full h-[769px] m-[20px] py-[100px] sm:w-1/2">
            Madhuram'25 is SLIET Longowal’s premier social and cultural festival, uniting over 10,000 attendees in a grand celebration of music, dance, art, and creativity. This two-day extravaganza showcases exciting events, performances, and competitions, making it a vibrant platform for talent, culture, and unforgettable experiences.
          </p>
          <img className="w-full h-[770px] sm:w-1/2" src={group} alt="Group" />
        </div>

        <div className="flex justify-center">
          <img className="ml-4 w-[350px] h-[150px]" src={design3} alt="Design3" />
        </div>

        <div className="flex items-center py-6 justify-around sm:flex sm:items-center sm:justify-between">
          <button onClick={prevSlide} aria-label="Previous Slide" className="flex items-center">
            <img className="mx-2 w-[50px] h-[50px]" src={leftarrow} alt="Previous" />
          </button>

          <div className="w-[300px] sm:w-[920px] sm:mx-2 flex items-center justify-between overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 300}px)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-[300px] h-[300px] sm:w-[300px] sm:h-[330px]">
                  <img
                    className="w-full h-full sm:px-8"
                    src={image}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} aria-label="Next Slide" className="flex items-center">
            <img className="mx-1 w-[50px] h-[50px]" src={rightarrow} alt="Next" />
          </button>
        </div>

        <img className="w-full h-[110px] sm:h-[161px]" src={groupbottom} alt="Group Bottom" />
        <img className="w-full h-full bg-[#fff]" src={group2} alt="Group 2" />

        <div className="">
          <Footer />
        </div>

        
        <img className="w-full h-full bg-[#fff]" src={group2} alt="Group 2" />
      </div>
    </div>
  );
}

export default About;