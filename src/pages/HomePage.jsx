import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/HomePage/Hero";
import Team from "../components/HomePage/Team";
import Sponsors from "../components/HomePage/Sponsers";
import Footer from "../components/Footer";
import FlowerImage from "/assets/745.png";

const HomePage = () => {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const sponsorsRef = useRef(null);
  const footerRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isSponsorsInView = useInView(sponsorsRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#1F3765] text-white min-h-screen">
      <Navbar bgColor="#1F3765" />

      {/* Hero Section with Floating Animation */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -5 }} // Slight floating effect on hover
      >
        <Hero />
      </motion.div>

      {/* Team Section with Heading and Animation */}
      <motion.h2
        className="text-center text-3xl lg:text-4xl font-semibold mt-10"
        initial={{ opacity: 0 }}
        animate={isTeamInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Meet The Organisers
      </motion.h2>

      <motion.div
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Team />
      </motion.div>

      {/* Sponsors Section with Heading and Animation */}
      <motion.h2
        className="text-center text-3xl lg:text-4xl font-semibold mt-10"
        initial={{ opacity: 0 }}
        animate={isSponsorsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our Sponsors
      </motion.h2>

      <motion.div
        ref={sponsorsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isSponsorsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Sponsors />
      </motion.div>

      {/* Footer with Smooth Fade-In Effect */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={isFooterInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Footer bgColor="#1F3765" bgLightColor="#D3D3D3" flowerImage={FlowerImage} />
      </motion.div>
    </div>
  );
};

export default HomePage;
