import React from 'react';
import { motion } from 'framer-motion';
import nitkImage from '../img/image.png';
import lhccImage from '../img/image copy.png';

const Venue = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-24"
    >
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Conference Venue</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <img 
              src={nitkImage}
              alt="NITK Campus" 
              className="rounded-lg shadow-md w-full h-[400px] object-cover"
            />
            <p className="text-center mt-4 text-gray-600">NITK Main Building</p>
          </div>
          
          <div>
            <img 
              src={lhccImage}
              alt="Conference Hall" 
              className="rounded-lg shadow-md w-full h-[400px] object-cover"
            />
            <p className="text-center mt-4 text-gray-600">LHC-C (Conference Venue)</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-gray-600">
            National Institute of Technology Karnataka, Surathkal<br />
            LHC-C, West Side Campus
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Venue;
