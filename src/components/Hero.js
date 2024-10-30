import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'react-feather';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://www.nitk.ac.in/images/b1.jpg"
          alt="NITK Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 via-green-600/80 to-green-500/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
            <TypeAnimation
              sequence={[
                'Join Us',
                1000,
                'Join Us in',
                500,
                'Join Us in Shaping Tomorrow\'s',
                500,
              ]}
              wrapper="span"
              speed={50}
              className="block"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="block text-green-200"
            >
              Sustainable Future
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-green-100"
          >
            Join the world's leading conference on sustainable innovation and eco-friendly technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3"
            >
              <Calendar className="w-5 h-5 text-green-200" />
              <span className="text-white">September 15-17, 2024</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3"
            >
              <MapPin className="w-5 h-5 text-green-200" />
              <span className="text-white">NITK, Surathkal</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Register Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 4.4, duration: 1 }}
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      />
    </div>
  );
};

export default Hero;