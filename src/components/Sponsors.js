import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const dummySponsors = Array(6).fill({
    name: 'Sponsor Name',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+Logo'
  });

  return (
    <section ref={ref} className="py-24 bg-white" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Sponsors</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {dummySponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
