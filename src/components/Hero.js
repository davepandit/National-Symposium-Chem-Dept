import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'react-feather';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import nitkLogo from '../img/image copy 2.png';
import backgroundImage from '../img/WhatsApp Image 2025-01-18 at 20.45.37.jpeg';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-green-50">
      {/* Fixed background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.nitk.ac.in/images/b1.jpg"
          alt="NITK Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-50/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight">
            1<sup>st</sup> National Conference on
            <br />
            Climate Resilience and Environmentally Sustainable
            <br />
            Technologies (NITK-CREST 2025)
          </h1>

          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
            <TypeAnimation
              sequence={[
                'NITK CREST-2025',
                1000,
                'Innovate.',
                1000,
                'Innovate. Sustain.',
                1000,
                'Innovate. Sustain. Transform.',
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="block"
              cursor={true}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-sm sm:text-base text-gray-800">27<sup>th</sup> Feb - 1<sup>st</sup> Mar 2025</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-sm sm:text-base text-gray-800">NITK, Surathkal</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="mt-8"
          >
            <Link to="/registration">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-600 text-white font-medium px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-green-700 text-sm sm:text-base transition-colors"
              >
                Register Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Organized By Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 mt-8"
          >
            <h2 className="text-xl font-semibold text-green-700">Organized By</h2>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-600 shadow-lg mb-2">
                <img src={nitkLogo} alt="NITK Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-800 max-w-[150px] text-center">National Institute of Technology Karnataka, Surathkal</span>
            </motion.div>
            <h2 className="text-xl font-semibold text-green-700">In association with</h2>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-600 shadow-lg mb-2">
                <img src={backgroundImage} alt="KSPCB Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-800 max-w-[150px] text-center">Karnataka State Pollution Control Board</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling News Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg py-3 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex whitespace-nowrap"
            >
              <div className="animate-marquee inline-block">
                <span className="text-green-700 font-semibold px-4">
                  🔴 Selected papers will be published in Material Science and Engineering Technology (SCIE, IF-1.2), Wiley Publication as special issue
                </span>
                <span className="text-green-700 font-semibold px-4">
                  🔴 The abstract submission date extended to 30 January 2025
                </span>
                <span className="text-green-700 font-semibold px-4">
                  🔴 Early bird registration is now open
                </span>
              </div>
              <div className="animate-marquee2 inline-block absolute">
                <span className="text-green-700 font-semibold px-4">
                  🔴 Selected papers will be published in Material Science and Engineering Technology (SCIE, IF-1.2), Wiley Publication as special issue
                </span>
                <span className="text-green-700 font-semibold px-4">
                  🔴 The abstract submission date extended to 30 January 2025
                </span>
                <span className="text-green-700 font-semibold px-4">
                  🔴 Early bird registration is now open
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;