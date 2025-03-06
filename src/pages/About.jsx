import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import group1 from "/assets/About/group1.png";
import pic1 from "/assets/About/pic1.png";
import group from "/assets/About/group.png";
import design3 from "/assets/About/design3.png";
import rightarrow from "/assets/About/rightarrow.png";
import leftarrow from "/assets/About/leftarrow.png";
import group2 from "/assets/About/group2.png";
import gpic1 from "/assets/About/gpic1.jpg";
import gpic2 from "/assets/About/gpic2.png";
import gpic3 from "/assets/About/gpic3.jpg";

function About() {
  const images = [gpic2, gpic1, gpic3, gpic1, gpic3, gpic2, gpic3, gpic1, gpic2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosToShow, setPhotosToShow] = useState(1);
  const imageWidth = photosToShow === 3 ? 450 : 340;

  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setPhotosToShow(window.innerWidth >= 800 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + photosToShow >= images.length ? 0 : prevIndex + photosToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - photosToShow < 0 ? images.length - photosToShow : prevIndex - photosToShow
    );
  };

  return (
    <div className="w-full relative z-10 bg-texture-about flex items-center justify-center flex-wrap">
      <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Navbar />
      </motion.div>

      <motion.img
        className="w-full h-auto"
        src={group1}
        alt="group1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="container mx-auto relative bg-transparent z-50 ">
        <motion.img
          className="w-64 h-auto m-auto mt-[50px] md:w-96 lg:mt-[70px] lg:ml-[89px]"
          src={pic1}
          alt="pic1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center flex-wrap w-full py-8 lg:py-0 lg:flex-nowrap mb-5 lg:mb-10"
        >
          <motion.div
            className="flex items-center text-white text-2xl font-poppins lg:leading-[48px] h-auto m-[20px] py-[20px] lg:w-1/2 lg:text-4xl text-center md:text-justify"
            whileHover={{ scale: 1.02 }}
          >
            Madhuram'25 is SLIET Longowal’s premier social and cultural festival, uniting over
            10,000 attendees in a grand celebration of music, dance, art, and creativity. This
            two-day extravaganza showcases exciting events, performances, and competitions, making
            it a vibrant platform for talent, culture, and unforgettable experiences.
          </motion.div>

          <motion.img
            className="w-[500px] h-auto"
            src={group}
            alt="Group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>

        <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img className="w-64 h-auto lg:w-96 md:my-10" src={design3} alt="Design3" />
        </motion.div>

        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row gap-2 w-full py-10 justify-center lg:mb-20"
        >
          <motion.button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <img className="w-[43px] h-[38px] p-[5px] lg:w-[60px] lg:h-[52px] lg:p-[6px]" src={leftarrow} alt="Previous" />
          </motion.button>

          <div className="w-full mx-auto flex flex-row items-center justify-start overflow-hidden relative lg:w-[1350px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="w-[340px] h-[340px] lg:w-[450px] lg:h-96 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <img className="w-full h-full lg:px-8" src={image} alt={`Slide ${index}`} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <img className="w-[43px] h-[38px] p-[5px] lg:w-[60px] lg:h-[60px] lg:p-[6px]" src={rightarrow} alt="Next" />
          </motion.button>
        </motion.div>
      </div>

      {/* Group2 Image Above Footer */}
      <motion.img
        className="w-full bg-white h-20 lg:h-full"
        src={group2}
        alt="Group 2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Footer with Animation */}
      <motion.div className="w-full" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Footer bgColor={"#FF0A5B"} bgLightColor={"#FF0A5B"} />
      </motion.div>

      {/* Group2 Image Below Footer */}
      <motion.img
        className="w-full bg-white h-20 lg:h-full"
        src={group2}
        alt="Group 2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default About;
