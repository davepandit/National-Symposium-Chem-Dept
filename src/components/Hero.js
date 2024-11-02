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
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 tracking-tight">
            <TypeAnimation
              sequence={[
                'NITK CREST-2025',
                1000,
                'Innovate. Sustain. Transform.',
                500,
              ]}
              wrapper="span"
              speed={50}
              className="block"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600"
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
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-sm sm:text-base text-gray-800">27th Feb - 1st Mar 2025</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all shadow-lg hover:bg-green-700 text-sm sm:text-base"
              >
                Register Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;