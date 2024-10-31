import React from 'react';
import { motion } from 'framer-motion';

const speakers = [
  { name: 'Prof. Tanmay Basak', affiliation: 'IIT Madras' },
  { name: 'Prof. R. Vinu', affiliation: 'IIT Madras' },
  { name: 'Prof. Sanjeev Chaudhari', affiliation: 'IIT Bombay' },
  { name: 'Dr. Manoj P Samuel', affiliation: 'Executive Director of CWRDM, Kozhikode' },
  { name: 'Dr. Sivaraman Savithri', affiliation: 'CSIR NIIST' },
  { name: 'Dr. T.C.S.M. Gupta', affiliation: 'Senior Vice President, R&D, Apar Industries Limited Mumbai' },
  { name: 'Prof. P C Abhilash', affiliation: 'IIT BHU Varanasi' },
  { name: 'Prof. Nihar Ranjan Mohapatra', affiliation: 'IIT Gandhinagar' },
  { name: 'Dr. Venkata Vanukuru', affiliation: 'Technical Director/DMTS, GLOBALFOUNDRIES' },
  { name: 'Dr. Somashekhar S Hiremath', affiliation: 'Professor, Department of Mechanical Engineering, IIT Madras' },
  { name: 'Dr. Madhav Dhananjaya Gadgil', affiliation: 'Indian ecologist' },
  { name: 'Dr. Kota Ullas Karanth', affiliation: 'NITK Alumni' },
];

const Speakers = () => {
  return (
    <section className="py-24 bg-green-50" id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Keynote Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt={speaker.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.affiliation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;