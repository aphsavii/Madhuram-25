import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Example fest date - set this to your actual fest date
  const festDate = new Date('2025-03-04T09:00:00');

  // Sample background images
  const backgroundImages = [
    'assets/banner-1.png',
   
  ];

  // Calculate remaining time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = festDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(timer);
  }, [festDate]);

  // Rotate background images
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === backgroundImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-2000 bg-cover bg-center
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${image})`,
              filter: 'blur(5px) brightness(0.6)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-4 py-8">
        {/* Logo and Title */}
        <div className="text-center mt-8 sm:mt-16">
          <div className="mx-auto">
            <motion.div 
              className="w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-green-100 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 15px rgba(46, 204, 113, 0.5)',
                  '0 0 20px rgba(46, 204, 113, 0.8)',
                  '0 0 15px rgba(46, 204, 113, 0.5)'
                ]
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
                <img src="assets/logo.svg" className='w-28 h-28 lg:w-40' alt="" />
            </motion.div>
          </div>
          <motion.h1 
            className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MADHURAM'25
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl sm:text-2xl italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get Ready For The Ultimate Experience
          </motion.p>
        </div>

        {/* Timer */}
        <motion.div 
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">COMING SOON</h2>
          <div className="flex justify-center flex-wrap gap-4">
            <motion.div 
              className="w-24 sm:w-32 p-3 bg-black bg-opacity-60 backdrop-blur-md rounded-lg border border-green-500/30 shadow-md"
              whileHover={{ scale: 1.05, borderColor: 'rgba(46, 204, 113, 0.6)' }}
            >
              <div className="text-3xl sm:text-4xl font-bold">{days}</div>
              <div className="text-sm uppercase">Days</div>
            </motion.div>
            <motion.div 
              className="w-24 sm:w-32 p-3 bg-black bg-opacity-60 backdrop-blur-md rounded-lg border border-green-500/30 shadow-md"
              whileHover={{ scale: 1.05, borderColor: 'rgba(46, 204, 113, 0.6)' }}
            >
              <div className="text-3xl sm:text-4xl font-bold">{hours}</div>
              <div className="text-sm uppercase">Hours</div>
            </motion.div>
            <motion.div 
              className="w-24 sm:w-32 p-3 bg-black bg-opacity-60 backdrop-blur-md rounded-lg border border-green-500/30 shadow-md"
              whileHover={{ scale: 1.05, borderColor: 'rgba(46, 204, 113, 0.6)' }}
            >
              <div className="text-3xl sm:text-4xl font-bold">{minutes}</div>
              <div className="text-sm uppercase">Minutes</div>
            </motion.div>
            <motion.div 
              className="w-24 sm:w-32 p-3 bg-black bg-opacity-60 backdrop-blur-md rounded-lg border border-green-500/30 shadow-md"
              whileHover={{ scale: 1.05, borderColor: 'rgba(46, 204, 113, 0.6)' }}
            >
              <div className="text-3xl sm:text-4xl font-bold">{seconds}</div>
              <div className="text-sm uppercase">Seconds</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex gap-6 mt-8">
            <motion.a 
              href="www.instagram.com/madhuramsliet" 
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://www.youtube.com/@MadhuramSLIET" 
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;