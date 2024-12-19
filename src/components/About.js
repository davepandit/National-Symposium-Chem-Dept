import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-2">About CREST 2025</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="prose prose-lg text-justify">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                The Conference
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The 1<sup>st</sup> National Conference on Climate Resilience and Environmentally Sustainable Technologies (NITK - CREST 2025) is a pioneering event that unites experts, researchers, and professionals in the field. This conference serves as a platform for interdisciplinary collaboration, addressing critical challenges in climate change and environmental sustainability.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Through innovative technological approaches, CREST 2025 explores cutting-edge solutions for building resilient communities and sustainable ecosystems. Join us in engaging discussions, share groundbreaking research, and contribute to shaping a sustainable future for generations to come.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="prose prose-lg text-justify">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                The Institution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                National Institute of Technology Karnataka (NITK), Surathkal is a premier Institution of National Importance, as conferred by the NIT Act No.29 of 2007. Consistently ranked among India's top ten technical institutions, NITK excels in providing quality technological education and supporting cutting-edge research and development activities.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Offering comprehensive Undergraduate, Postgraduate, and Doctoral programs, NITK is dedicated to nurturing future leaders in technology and innovation. Our commitment to excellence, global competitiveness, and continuous knowledge advancement drives our vision of transforming students into pioneers in their chosen fields.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;