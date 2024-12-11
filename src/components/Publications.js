import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white" id="publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Publications/Proceedings</h2>
        </motion.div>
        
        <div className="prose max-w-none text-center">
          <p className="text-gray-600 mb-6">
            All the abstracts accepted after peer review from registered participants will be published in the conference proceedings with ISBN number.
          </p>
          <p className="text-gray-600 mb-6">
            Selected papers presented at NITK - CREST 2025 will be published in Special Issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications; 