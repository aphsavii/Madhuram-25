import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HomePage/Hero";
import Team from "../components/HomePage/Team";
import Sponsors from "../components/HomePage/Sponsers";
import Footer from "../components/Footer";
import FlowerImage from "/assets/74.png"

const HomePage = () => {
  return (
    <div className="bg-[#1F3765] text-white min-h-screen">
      <Navbar bgColor="#1F3765" />
      <Hero />
      <Team />
      <Sponsors />
      <Footer bgColor="#1F3765" bgLightColor="#D3D3D3" flowerImage={FlowerImage} />
    </div>
  );
};

export default HomePage;