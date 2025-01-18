import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import wileyImage from '../img/WhatsApp Image 2025-01-18 at 20.38.57.jpeg';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section ref={ref} className="py-24 bg-gradient-to-b from-white to-green-50" id="publications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-700 mb-4">Publications</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Conference Proceedings */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Conference Proceedings</h3>
              <p className="text-gray-600 mb-6">
                All the abstracts accepted after peer review from registered participants will be published in the conference proceedings with ISBN number.
              </p>
            </motion.div>

            {/* Special Issue Publication */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Special Issue Publication</h3>
                <img src={wileyImage} alt="Wiley Publication" className="h-16 object-contain" />
              </div>
              <p className="text-gray-600 mb-4">
                Selected papers presented at NITK-CREST 2025 will be published in Material Science and Engineering Technology (SCIE, IF-1.2), Wiley Publication as special issue.
              </p>
            </motion.div>
          </div>

          {/* Additional Publication Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Publication Opportunities</h3>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-gray-600">
                  Efforts are on to include a few more reputed journals for publishing Special Issues, as well as to publish selected papers as book chapters in Springer.
                </p>
              </div>
              <div className="w-1/4 flex justify-end">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-green-100 rounded-full p-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full"
            >
              <img 
                src={wileyImage} 
                alt="Wiley Publication" 
                className="w-full h-auto"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Publications;