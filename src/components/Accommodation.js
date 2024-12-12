import React from 'react';
import { motion } from 'framer-motion';

const Accommodation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-24"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Accommodation</h2>
        <p className="text-xl text-gray-600">To be Updated</p>
      </div>
    </motion.div>
  );
};

export default Accommodation;
