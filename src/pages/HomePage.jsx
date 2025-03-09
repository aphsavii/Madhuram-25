import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/HomePage/Hero";
import Team from "../components/HomePage/Team";
import Sponsors from "../components/HomePage/Sponsers";
import Footer from "../components/Footer";
import FlowerImage from "/assets/745.png";
import ButterflyGif from "/assets/Butterfly.gif";

const HomePage = () => {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const sponsorsRef = useRef(null);
  const footerRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isSponsorsInView = useInView(sponsorsRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });
  
  // Screen dimensions state (updated on resize)
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Check if device is mobile based on screen width
  const isMobile = dimensions.width < 768; // Standard breakpoint for mobile
  
  const generateButterflies = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      directionX: Math.random() < 0.5 ? -1 : 1,
      directionY: Math.random() < 0.5 ? -1 : 1,
      speed: Math.random() * 1.5 + 1, // Random speed between 1 and 2.5
      size: Math.random() * 40 + 60, // Random size between 60 and 100
      flutterSpeed: Math.random() * 0.5 + 0.7, // Random flutter speed between 0.7 and 1.2
    }));
  };
  
  // Set initial butterfly count based on screen size
  const [butterflies, setButterflies] = useState(() => 
    generateButterflies(isMobile ? 3 : 5)
  );
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newIsMobile = newWidth < 768;
      
      setDimensions({
        width: newWidth,
        height: newHeight
      });
      
      // Adjust butterfly count when switching between mobile and desktop
      if (newIsMobile !== isMobile) {
        setButterflies(generateButterflies(newIsMobile ? 3 : 5));
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [dimensions.width, isMobile]);
  
  // Dynamically add more butterflies - different behavior for mobile vs desktop
  useEffect(() => {
    // Only add more butterflies if under the max count for the device type
    const maxButterflies = isMobile ? 4 : 10; // Cap at 4 for mobile, 10 for desktop
    
    if (butterflies.length < maxButterflies) {
      const addMoreButterflies = setTimeout(() => {
        setButterflies((prev) => {
          // Calculate how many to add based on current count and max
          const toAdd = Math.min(2, maxButterflies - prev.length);
          return toAdd > 0 ? [...prev, ...generateButterflies(toAdd)] : prev;
        });
      }, 5000); // Add new butterflies every 5 seconds
      
      return () => clearTimeout(addMoreButterflies);
    }
  }, [butterflies, isMobile]);
  
  // Animate butterflies
  useEffect(() => {
    const butterflyMovement = setInterval(() => {
      setButterflies(prevButterflies => {
        return prevButterflies.map(butterfly => {
          // Calculate new position
          let newX = butterfly.x + (butterfly.directionX * butterfly.speed);
          let newY = butterfly.y + (butterfly.directionY * butterfly.speed);
          
          // Random small jitter in movement (flutter effect)
          newX += (Math.random() - 0.5) * 3;
          newY += (Math.random() - 0.5) * 3;
          
          // Check boundaries and reverse direction if needed
          let newDirectionX = butterfly.directionX;
          let newDirectionY = butterfly.directionY;
          
          // Padding to keep butterflies fully visible
          const padding = butterfly.size;
          
          // Horizontal bounds check
          if (newX <= padding) {
            newX = padding;
            newDirectionX = 1; // Change direction to right
          } else if (newX >= dimensions.width - padding) {
            newX = dimensions.width - padding;
            newDirectionX = -1; // Change direction to left
          }
          
          // Vertical bounds check
          if (newY <= padding) {
            newY = padding;
            newDirectionY = 1; // Change direction to down
          } else if (newY >= dimensions.height - padding) {
            newY = dimensions.height - padding;
            newDirectionY = -1; // Change direction to up
          }
          
          // Randomly change direction occasionally (5% chance)
          if (Math.random() < 0.05) {
            newDirectionX = Math.random() < 0.5 ? -1 : 1;
          }
          if (Math.random() < 0.05) {
            newDirectionY = Math.random() < 0.5 ? -1 : 1;
          }
          
          return {
            ...butterfly,
            x: newX,
            y: newY,
            directionX: newDirectionX,
            directionY: newDirectionY
          };
        });
      });
    }, 50); // Update every 50ms for smooth animation
    
    return () => clearInterval(butterflyMovement);
  }, [dimensions]);

  return (
    <div className="bg-texture-home text-white min-h-screen overflow-auto">
      <Navbar />
      
      {/* Animated Butterflies */}
      {butterflies.map(butterfly => (
        <div
          key={butterfly.id}
          style={{
            position: 'fixed',
            zIndex: 50,
            pointerEvents: 'none',
            width: `${butterfly.size}px`,
            height: `${butterfly.size}px`,
            left: 0,
            top: 0,
            transform: `translate(${butterfly.x}px, ${butterfly.y}px) scaleX(${butterfly.directionX > 0 ? -1 : 1})`,
            transition: 'transform 0.1s linear'
          }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: butterfly.flutterSpeed,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <img 
              src={ButterflyGif} 
              alt="Butterfly" 
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'contain'
              }} 
            />
          </motion.div>
        </div>
      ))}

      {/* Hero Section with Floating Animation */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -5 }}
      >
        <Hero />
      </motion.div>

      {/* Team Section with Heading and Animation */}
      <motion.h2
        className="text-center text-3xl lg:text-6xl font-semibold mt-10 lg:mt-24"
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
        {/* Our Sponsors */}
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