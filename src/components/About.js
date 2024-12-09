import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About NITK - CREST 2025</h2>
          <p className="text-xl text-gray-600">
            The 1st National Conference on Climate Resilience and Environmental Sustainability using Technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-700">About the Conference</h3>
            <p className="text-gray-600 mb-6">
              NITK - CREST 2025 is a pioneering event that brings together experts, researchers, and professionals from diverse engineering disciplines. Hosted by the leading minds in these fields, CREST 2025 aims to foster interdisciplinary collaboration to address the pressing challenges of climate change and environmental sustainability. Through innovative technological approaches, the conference will explore cutting-edge solutions for building resilient communities and sustainable ecosystems. Participants will have the opportunity to engage in thought-provoking discussion, share groundbreaking research, and contribute to shaping a sustainable future for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;