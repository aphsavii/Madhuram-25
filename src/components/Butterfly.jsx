// components/AnimatedButterfly.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedButterfly = ({ size = 80, color = "#FFB6C1", secondaryColor = "#FF69B4" }) => {
  const [position, setPosition] = useState({ x: -150, y: Math.random() * window.innerHeight });
  const [path, setPath] = useState([]);

  // Generate a random butterfly path
  useEffect(() => {
    const generateRandomPath = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numPoints = Math.floor(Math.random() * 4) + 4; // 4-7 waypoints
      const newPath = [];

      for (let i = 0; i < numPoints; i++) {
        newPath.push({
          x: (screenWidth * (i + 1)) / (numPoints + 1),
          y: Math.random() * (screenHeight * 0.7) + screenHeight * 0.15, // Keep in middle area of screen
        });
      }

      // Add final point to exit the screen
      newPath.push({ x: screenWidth + 150, y: Math.random() * screenHeight });
      return newPath;
    };

    setPath(generateRandomPath());
  }, []);

  return (
    <motion.div
      initial={{ x: position.x, y: position.y, rotate: 0 }}
      animate={[
        ...path.map((point, index) => ({
          x: point.x,
          y: point.y,
          rotate: index % 2 === 0 ? 10 : -10,
          transition: {
            duration: 3 + index,
            ease: "easeInOut",
          }
        })),
      ]}
      style={{ 
        position: 'fixed', 
        zIndex: 50, 
        pointerEvents: 'none',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{ overflow: 'visible' }}
      >
        {/* Left upper wing */}
        <motion.path
          d="M50 50 Q20 10 5 40 Q15 45 50 50"
          fill={color}
          stroke="#888"
          strokeWidth="0.5"
          initial={{ rotate: 0, originX: 50, originY: 50 }}
          animate={{ rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Left lower wing */}
        <motion.path
          d="M50 50 Q20 80 10 60 Q20 55 50 50"
          fill={secondaryColor}
          stroke="#888"
          strokeWidth="0.5"
          initial={{ rotate: 0, originX: 50, originY: 50 }}
          animate={{ rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Right upper wing */}
        <motion.path
          d="M50 50 Q80 10 95 40 Q85 45 50 50"
          fill={color}
          stroke="#888"
          strokeWidth="0.5"
          initial={{ rotate: 0, originX: 50, originY: 50 }}
          animate={{ rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Right lower wing */}
        <motion.path
          d="M50 50 Q80 80 90 60 Q80 55 50 50"
          fill={secondaryColor}
          stroke="#888"
          strokeWidth="0.5"
          initial={{ rotate: 0, originX: 50, originY: 50 }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Body */}
        <motion.path
          d="M47 38 Q50 36 53 38 L53 62 Q50 64 47 62 Z"
          fill="#333"
          stroke="#000"
          strokeWidth="0.5"
        />
        
        {/* Antenna left */}
        <motion.path
          d="M48 38 Q45 30 42 25"
          fill="none"
          stroke="#333"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
        {/* Antenna right */}
        <motion.path
          d="M52 38 Q55 30 58 25"
          fill="none"
          stroke="#333"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
        {/* Antenna tips */}
        <circle cx="42" cy="25" r="1.5" fill="#555" />
        <circle cx="58" cy="25" r="1.5" fill="#555" />
        
        {/* Wing details/patterns for more realism */}
        <circle cx="25" cy="35" r="4" fill="#FFF" fillOpacity="0.5" />
        <circle cx="75" cy="35" r="4" fill="#FFF" fillOpacity="0.5" />
        <circle cx="30" cy="65" r="3" fill="#FFF" fillOpacity="0.4" />
        <circle cx="70" cy="65" r="3" fill="#FFF" fillOpacity="0.4" />
      </svg>
    </motion.div>
  );
};

export default AnimatedButterfly;