import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'react-feather';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-50">
      <div className="absolute inset-0">
        <img
          src="https://www.nitk.ac.in/images/b1.jpg"
          alt="NITK Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-50/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight mb-4">
            1<sup>st</sup>National Conference on
Climate Resilience and Environmentally Sustainable
Technologies (NITK-CREST 2025)
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600"
          >
            Join experts, researchers, and professionals from diverse engineering disciplines to address the pressing challenges of climate change and environmental sustainability.
          </motion.p>

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

          {/* Animated Marquee Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.4, duration: 0.8 }}
            className="mt-6"
          >
            <div className="relative overflow-hidden">
              <div className="animate-scroll-right whitespace-nowrap">
                <span className="text-black font-semibold text-lg inline-block">
                  🔴 We are accepting Abstracts LIVE NOW!!! 🔴
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;