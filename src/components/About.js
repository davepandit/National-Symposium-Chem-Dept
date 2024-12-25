import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About CREST - Only title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">About CREST 2025</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Conference Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Conference</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                1<sup>st</sup> National Conference on Climate Resilience and Environmental Sustainability using Technologies (NITK - CREST 2025) is a pioneering event that brings together experts, researchers, and professionals. NITK-CREST 2025 aims to foster interdisciplinary collaboration to address the pressing challenges of climate change and environmental sustainability. Through innovative technological approaches, the conference will explore cutting-edge solutions for building resilient communities and sustainable ecosystems. Participants will have the opportunity to engage in thought-provoking discussions, share groundbreaking research, and contribute to shaping a sustainable future for generations to come.
              </p>
            </div>
          </motion.div>

          {/* About NITK */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About NITK</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                National Institute of Technology Karnataka (NITK), Surathkal has established itself as a premier Institution engaged in imparting quality technological education and providing support to research and development activities. NITK is conferred the status of an Institution of National Importance vide NIT Act No.29 of 2007 by Govt. of India and is consistently ranked as one of the top ten technical institutions in India. NITK offers Undergraduate, Postgraduate, and Doctoral Degree programs. NITK is committed to enhancing the capabilities and potential of our human resources with the objective of transforming them into leaders in their chosen areas of interest. Our vision is to strive for excellence, be globally competitive in technical education, and focus on knowledge assimilation, generation, and dissemination.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;