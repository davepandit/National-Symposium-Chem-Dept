import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Proceedings = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white" id="proceedings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Proceedings</h2>
          <p className="text-xl text-gray-600">
            All the abstracts accepted after peer review will be published in the conference proceedings with ISBN number. Selected papers presented at NITK - CREST 2025 will be published in Special Issues.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Proceedings; 